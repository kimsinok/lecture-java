package com.example.articleapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.articleapp.dto.ArticleDto;
import com.example.articleapp.service.ArticleService;

@RestController
@RequestMapping("/api/v1")
public class ArticleController {

    @Autowired
    private ArticleService articleService;

    // 게시글 목록 조회 요청
    @GetMapping("/articles")
    public ResponseEntity<ArticleDto> getArticleList() {

        List<ArticleDto> articles = articleService.retrieveArticleList();

        return new ResponseEntity(articles, HttpStatus.OK);

    }

}
