package com.example.pract1up.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class HomeController {
    @GetMapping("/")
    String getHome(Model model) {
//        model.addAttribute("name", "Paolo");
        //model.addAttribute("name", name);
        return "home";
    }

    @GetMapping("/calc")
    String getCalc(Model model){
        return "calc";
    }

    @GetMapping("/converter")
    String getConverter(Model model){
        return "converter";
    }

    @GetMapping("/results")
    String getResults(Model model){
        return "converter";
    }

    @PostMapping("/calc/results")
    String postPrintRes(Model model,
                        @RequestParam(name = "resss", required = false, defaultValue = "0") String resCalc){
        model.addAttribute("resCalc", resCalc);
        return "results";
    }

    @PostMapping("/convert/results")
    String postConvert(Model model,
                       @RequestParam(name = "resConvert", required = false, defaultValue = "0") String resConvert){
        model.addAttribute("resConvert", resConvert);
        return "results";
    }
}

