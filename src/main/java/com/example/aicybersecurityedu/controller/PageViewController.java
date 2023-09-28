package com.example.aicybersecurityedu.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageViewController {
    @GetMapping("/")
    public String home() {
        return "home"; // Returns the home view
    }
}
