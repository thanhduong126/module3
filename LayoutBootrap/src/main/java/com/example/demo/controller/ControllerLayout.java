package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ControllerLayout {

	@GetMapping("/")
	public String testLayout(){
		return "index";
	}
}
