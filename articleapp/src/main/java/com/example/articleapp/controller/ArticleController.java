package com.example.articleapp.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

    // 게시글 등록 요청
    @PostMapping("/articles")
    public ResponseEntity<Map> createArticle(@RequestBody ArticleDto articleDto) {

        int id = articleService.registerArticle(articleDto);

        Map<String, Integer> map = new HashMap<>();
        map.put("id", id);

        return new ResponseEntity<>(map, HttpStatus.CREATED); // 201
    }

}
