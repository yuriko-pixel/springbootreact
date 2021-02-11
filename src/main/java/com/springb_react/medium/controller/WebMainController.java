package com.springb_react.medium.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebMainController {

	@GetMapping // <2>
	public String index() {
		return "index"; // <3>
	}


}