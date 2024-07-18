package com.example.consumer;


import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

@Component
public class kafkaListener {
    @KafkaListener(topics = "topic_1",groupId = "group-id")
    public void listen(String message) {
        System.out.println("Received message: " + message);
    }
}
