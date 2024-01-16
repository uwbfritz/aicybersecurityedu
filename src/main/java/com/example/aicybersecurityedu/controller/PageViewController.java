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

    @GetMapping("/chapter5")
    public String chapter5() {
        return "Chapter5"; // Returns the home view
    }

    @GetMapping("/chapter4")
    public String chapter4() {
        return "Chapter4"; // Returns the home view
    }
    @GetMapping("/genQuiz")
    public String genQuiz() {
        return "GenAiQuiz"; // Returns the home view
    }

    @GetMapping("/module1quiz")
    public String module1Quiz() {
        return "module1Quiz"; // Returns the home view
    }

    @GetMapping("/moduleoneoonequiz")
    public String module1dot1Quiz() {
        return "module1dot1Quiz"; // Returns the home view
    }

    @GetMapping("/moduleoneotwoquiz")
    public String module1dot2Quiz() {
        return "module1dot2Quiz"; // Returns the home view
    }

    @GetMapping("/moduletwootwoquiz")
    public String module2dot2Quiz() {
        return "module2dot2Quiz"; // Returns the home view
    }

    @GetMapping("/modulethreeofivequiz")
    public String module3dot5Quiz() {
        return "module3dot5Quiz"; // Returns the home view
    }
    @GetMapping("/module2quiz")
    public String module2Quiz() {
        return "module2Quiz"; // Returns the home view
    }

    @GetMapping("/module3quiz")
    public String module3Quiz() {
        return "module3Quiz"; // Returns the home view
    }

    @GetMapping("/phishing")
    public String phishingLab() {
        return "phishing"; // Returns the home view
    }

    @GetMapping("/klab")
    public String klab() {
        return "kmeans"; // Returns the home view
    }

    @GetMapping("/draw")
    public String draw() {
        return "draw"; // Returns the home view
    }

    @GetMapping("/face")
    public String face() {
        return "faceRecognition"; // Returns the home view
    }

    @GetMapping("/dtree")
    public String dtree() {
        return "decisionTree"; // Returns the home view
    }

    @GetMapping("/spam-email")
    public String spamEmailDetectionPage() {
        return "spam";
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
