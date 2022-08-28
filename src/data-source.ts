import "reflect-metadata"
import { DataSource } from "typeorm"
import { Message } from "./entity/Message"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "",
    port: 3306,
    username: "",
    password: "",
    database: "",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
