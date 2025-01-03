package com.example.articleapp.util;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import com.example.articleapp.dto.ArticleFileDto;

import jakarta.annotation.PostConstruct;
import lombok.extern.slf4j.Slf4j;
import net.coobird.thumbnailator.Thumbnailator;

@Slf4j
@Component
public class CustomFileUtil {

    @Value("${com.example.articleapp.upload.path}")
    private String uploadPath; // upload

    @PostConstruct
    public void init() {

        File tempDir = new File(uploadPath);

        if (!tempDir.exists()) {
            tempDir.mkdir();
        }

        uploadPath = tempDir.getAbsolutePath(); // /home/user1/articleapp/upload

        log.info("File upload path : {}", uploadPath);

    }

    // 업르드 파일 저장
    public List<ArticleFileDto> saveFiles(List<MultipartFile> files) throws RuntimeException {

        if (files == null || files.size() == 0) {
            return null;
        }

        List<ArticleFileDto> articleFiles = new ArrayList<>();

        files.stream().forEach(articleFile -> {
            // 32자 16진수
            String filename = UUID.randomUUID().toString() + "_" + articleFile.getOriginalFilename();
            // 파일 시스템 경로 : 파일 입출력에 사용
            Path savePath = Paths.get(uploadPath, filename);

            try {
                // 파일의 내용 복사
                Files.copy(articleFile.getInputStream(), savePath);

                String contentType = articleFile.getContentType();

                if (contentType != null && contentType.startsWith("image")) {
                    // 썸네일 이미지 생성
                    Path thumbnailPath = Paths.get(uploadPath, "s_" + filename);
                    Thumbnailator.createThumbnail(savePath.toFile(), thumbnailPath.toFile(), 200, 200);
                }

                ArticleFileDto articleFileDto = new ArticleFileDto();
                articleFileDto.setFilename(filename);
                articleFileDto.setFilepath(uploadPath);
                articleFileDto.setSize(articleFile.getSize());

                articleFiles.add(articleFileDto);

            } catch (IOException e) {
                throw new RuntimeException(e.getMessage());
            }

        });

        return articleFiles;

    }

    // 파일 다운로드 처리
    public ResponseEntity<Resource> download(String filename) {
        // FileSystemResource : 파일 시스템에 있는 특정 파일이나 디렉토리에 접근하기 위해서 제공
        Resource resource = new FileSystemResource(uploadPath + File.separator + filename);

        if (!resource.isReadable()) {
            resource = new FileSystemResource(uploadPath + File.separator + "default.jpg");
        }

        HttpHeaders headers = new HttpHeaders();
        try {
            // 파일의 경로나 확장자를 기반으로 해당 파일의 컨텐트 타입(MIME)을 결정한다.
            headers.add("content-type", Files.probeContentType(resource.getFile().toPath()));
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }

        // return new ResponseEntity<>(resource, headers, HttpStatus.OK);
        return ResponseEntity.ok().headers(headers).body(resource); // 빌더

    }

}
