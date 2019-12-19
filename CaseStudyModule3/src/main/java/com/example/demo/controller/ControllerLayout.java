package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ControllerLayout {

	@GetMapping("/")
	public String testLayout(){
		return "layout/layout";
	}

	@GetMapping("/1")
	public String testIndex(){
		return "layout/index";
	}
}
