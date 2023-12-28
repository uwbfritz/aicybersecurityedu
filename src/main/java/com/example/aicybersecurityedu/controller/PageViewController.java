package com.example.aicybersecurityedu.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

@Controller
public class PageViewController {
//    @GetMapping("/")
//    public String home() {
//        return "home"; // Returns the home view
//    }

    @GetMapping("/")
    public String home() {
        return "home2"; // Returns the home view
    }

    @GetMapping("/chapter")
    public String chapters() {
        return "ChapterMerged"; // Returns the home view
    }

    @GetMapping("/chapter1")
    public String chapter1() {
        return "ChapterMerged"; // Returns the home view
    }
    @GetMapping("/chapter2")
    public String chapter2() {
        return "Chapter2"; // Returns the home view
    }

    @GetMapping("/chapter3")
    public String chapter3() {
        return "Chapter3"; // Returns the home view
    }
    @GetMapping("/chapter4")
    public String chapter4() {
        return "Chapter4"; // Returns the home view
    }
    @GetMapping("/chapter5")
    public String chapter5() {
        return "Chapter5"; // Returns the home view
    }
    @GetMapping("/chapter6")
    public String chapter6() {
        return "Chapter6"; // Returns the home view
    }

    @GetMapping("/spam-email")
    public String spamEmailDetectionPage() {
        return "spam-email";
    }

    @PostMapping("/check-spam")
    public String checkSpam(@RequestParam String emailContent, Model model) {
        // In a real scenario, you would use a Machine Learning model to check for spam.
        // For this demo, we will just return a hardcoded response.

        model.addAttribute("isSpam", true); // This is just for the demo
        return "spam-email";
    }

    @GetMapping("/facial-recognition")
    public String facialRecognitionPage() {
        return "facial-recognition";
    }

    @PostMapping("/detect-face")
    public String detectFace(MultipartFile faceImage, Model model) {
        // In a real scenario, you'd use a facial recognition API or model to detect faces.
        // For this demo, we'll just return a hardcoded response.
        model.addAttribute("faceDetected", true); // This is just for the demo
        return "facial-recognition";
    }

    @GetMapping("/{topic}")
    public String loadTopicContent(@PathVariable String topic, Model model) {
        // Placeholder content. In a real-world scenario, this data might be fetched from a database or other sources.
        switch(topic) {
            case "network-security":
                model.addAttribute("topicTitle", "Network Security");
                model.addAttribute("topicContent", "Network security is...");
                break;
            case "cloud-security":
                model.addAttribute("topicTitle", "Cloud Security");
                model.addAttribute("topicContent", "Cloud security is...");
                break;
            // Handle other topics similarly...
            default:
                model.addAttribute("topicTitle", "Topic not found");
                model.addAttribute("topicContent", "The selected topic does not exist.");
        }
        return "education";
    }

}
