import { Kafka } from "kafkajs";

class KafkaConfig {
    constructor() {
      this.kafka = new Kafka({
        clientId: "nodejs-kafka",
        brokers: ["localhost:9092"],
      });
      this.consumer = this.kafka.consumer({ groupId: "group-id" });
    }
    async consume(topic, callback) {
        try {
          await this.consumer.connect();
          await this.consumer.subscribe({ topic: topic, fromBeginning: true });
          await this.consumer.run({
            eachMessage: async ({ topic, partition, message }) => {
              const value = message.value.toString();
              callback(value);
            },
          });
        } catch (error) {
          console.error(error);
        }
      }
    }
    export default KafkaConfig;
    
