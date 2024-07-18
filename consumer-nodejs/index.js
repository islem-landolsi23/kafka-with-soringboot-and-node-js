
import express from "express"
import bodyParser from "body-parser";
import KafkaConfig from "./Config.js";



const app =express()
const jsonParser =bodyParser.json()



const kafkaConfig = new KafkaConfig();
kafkaConfig.consume("topic_1", (value) => {
  console.log("Receive message: ", value);
});



app.listen(8092,()=>{

    console.log(8092 , "is running ...");
})