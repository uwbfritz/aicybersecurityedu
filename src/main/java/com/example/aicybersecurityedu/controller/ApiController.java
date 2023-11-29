package com.example.aicybersecurityedu.controller;

import com.example.aicybersecurityedu.RssFeedService;
import com.rometools.rome.feed.synd.SyndEntry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/news")
public class ApiController {

    @Autowired
    private RssFeedService rssFeedService;

    @GetMapping("/cybersecurity")
    public List<SyndEntry> getCyberSecurityNews() {
        try {
            return rssFeedService.fetchRssFeed("https://www.cshub.com/rss/articles");
        } catch (Exception e) {
            // Handle exception
            return null;
        }
    }

}
