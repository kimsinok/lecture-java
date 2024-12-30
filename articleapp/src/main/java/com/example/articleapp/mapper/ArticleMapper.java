package com.example.articleapp.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.example.articleapp.dto.ArticleDto;

@Mapper
public interface ArticleMapper {

    // 게시글 목록 조회
    List<ArticleDto> selectArticleList();

    // 게시글 등록
    void insertArticle(ArticleDto articleDto);

    // 게시글 상세조회
    ArticleDto selectArticle(int id);

    // 게시글 수정
    void updateArticle(ArticleDto articleDto);

    // 게시글 삭제
    void deleteArticle(int id);

    // 게시글 검색
    List<ArticleDto> findArticleList(Map<String, String> map);

}
