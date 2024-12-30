package com.example.articleapp.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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

    // 게시글 상세 조회 요청
    @GetMapping("/articles/{id}")
    public ResponseEntity<ArticleDto> getArticle(@PathVariable("id") int id) {

        ArticleDto articleDto = articleService.retrieveArticle(id);

        return new ResponseEntity<>(articleDto, HttpStatus.OK); // 200
    }

    // 게시글 수정 요청
    @PutMapping("/articles/{id}")
    public ResponseEntity<String> putArticle(@PathVariable("id") int id, @RequestBody ArticleDto articleDto) {
        articleDto.setId(id);
        articleService.modifyArticle(articleDto);
        return new ResponseEntity<>("", HttpStatus.NO_CONTENT);
    }

    // 게시글 삭제 요청
    @DeleteMapping("/articles/{id}")
    public ResponseEntity<String> deleteArticle(@PathVariable("id") int id) {

        articleService.removeArticle(id);

        return new ResponseEntity<>("", HttpStatus.NO_CONTENT);
    }

    // 게시글 검색 요청
    @GetMapping("/search")
    public ResponseEntity<ArticleDto> searchArticle(
            @RequestParam(name = "keyfield", required = false, defaultValue = "") String keyfield,
            @RequestParam(name = "keyword", required = false, defaultValue = "") String keyword) {

        Map<String, String> map = new HashMap<>();
        map.put("keyfield", keyfield); // writer, title, contents : 검색 조건
        map.put("keyword", keyword); // 검색어

        List<ArticleDto> articles = articleService.search(map);

        return new ResponseEntity(articles, HttpStatus.OK);
    }

}
