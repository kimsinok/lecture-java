package com.example.articleapp.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.articleapp.dto.ArticleDto;

@Mapper
public interface ArticleMapper {

    // 게시글 목록 조회
    List<ArticleDto> selectArticleList();

    // 게시글 등록
    int insertArticle(ArticleDto articleDto);

}
