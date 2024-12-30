package com.example.articleapp.service;

import java.util.List;

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

}
