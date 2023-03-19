import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { DomainKeyword } from "./entity/DomainKeyword";
require("dotenv").config();
export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env["DB_HOST"],
  port: parseInt(process.env["DB_PORT"]),
  username: process.env["DB_DATABASE_USER_NAME"],
  password: process.env["DB_PASSWORD"],
  database: process.env["DB_DATABASE"],
  synchronize: true,
  logging: false,
  entities: [User, DomainKeyword],
  migrations: [],
  subscribers: [],
});
