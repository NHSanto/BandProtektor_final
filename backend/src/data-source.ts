import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import {DomainKeyword} from "./entity/DomainKeyword";


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "12345678",
    database: "brandprotektor",
    synchronize: true,
    logging: false,
    entities: [User, DomainKeyword],
    migrations: [],
    subscribers: [],
})
