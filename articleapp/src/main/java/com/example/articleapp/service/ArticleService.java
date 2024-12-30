package com.example.articleapp.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.articleapp.dto.ArticleDto;
import com.example.articleapp.mapper.ArticleMapper;

@Service
@Transactional(readOnly = true)
public class ArticleService {

    @Autowired
    private ArticleMapper articleMapper;

    // 게시글 목록을 조회하다.
    public List<ArticleDto> retrieveArticleList() {

        return articleMapper.selectArticleList();

    }

    // 게시글을 등록하다.
    @Transactional(readOnly = false)
    public int registerArticle(ArticleDto articleDto) {

        articleMapper.insertArticle(articleDto);
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

}
