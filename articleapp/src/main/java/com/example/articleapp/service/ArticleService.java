package com.example.articleapp.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.example.articleapp.dto.ArticleDto;
import com.example.articleapp.dto.ArticleFileDto;
import com.example.articleapp.mapper.ArticleFileMapper;
import com.example.articleapp.mapper.ArticleMapper;
import com.example.articleapp.util.CustomFileUtil;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ArticleService {

    private final ArticleMapper articleMapper;

    private final ArticleFileMapper articleFileMapper;

    private final CustomFileUtil customFileUtil;

    // 게시글 목록을 조회하다.
    public List<ArticleDto> retrieveArticleList() {

        return articleMapper.selectArticleList();

    }

    // 게시글을 등록하다.
    @Transactional(readOnly = false)
    public int registerArticle(ArticleDto articleDto, List<MultipartFile> files) {

        articleMapper.insertArticle(articleDto);

        List<ArticleFileDto> articleFiles = customFileUtil.saveFiles(files);

        if (articleFiles == null) {
            return articleDto.getId();
        }

        for (ArticleFileDto articleFileDto : articleFiles) {
            articleFileDto.setArticleId(articleDto.getId());
        }

        articleFileMapper.insertArticleFile(articleFiles);

        return articleDto.getId();

    }

    // 게시글 상세정보를 조회하다.
    public ArticleDto retrieveArticle(int id) {

        return articleMapper.selectArticle(id);

    }

    // 게시글을 변경한다.
    @Transactional(readOnly = false)
    public void modifyArticle(ArticleDto articleDto) {

        articleMapper.updateArticle(articleDto);

    }

    // 게시글을 삭제하다.
    @Transactional(readOnly = false)
    public void removeArticle(int id) {

        articleMapper.deleteArticle(id);

    }

    // 게시글 검색하다.
    public List<ArticleDto> search(Map<String, String> map) {

        return articleMapper.findArticleList(map);

    }

    // 파일 다운로드 요청
    public ResponseEntity<Resource> download(String filename) {
        return customFileUtil.download(filename);
    }

}
