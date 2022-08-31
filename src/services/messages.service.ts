import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Message } from "../entity/Message";

export class MessagesService {
    private messagesRepo: Repository<Message>

    constructor() {
        this.messagesRepo = AppDataSource.getRepository(Message)
    }

    public async getUserMessages(userId: number): Promise<Message[]> {
        return this.messagesRepo.createQueryBuilder("message")
        .where("message.to = :id", { id: userId })
        .getMany()
    }
}