package com.example.demo.controller;


import com.example.demo.service.ProducerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProducerController {
    @Autowired
    ProducerService producerService ;


    @PostMapping("/send")
    public String sendMessage(@RequestParam("message")String message)
    {
          producerService.sendMessage("topic_1",message);
        return "message "+ message +" was send" ;
    }
}
