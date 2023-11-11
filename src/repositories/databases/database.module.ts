import { Module } from "@nestjs/common";
import MySQL from "./mysql/mysql.js";

const mysqlProvider = {
  provide: "MySQL_OpenProjectPlanner",
  useValue: new MySQL(
    process.env["MYSQL_CONNECTION"]!,
    {
      username: process.env["MYSQL_USER"]!,
      password: process.env["MYSQL_PASSWORD"]!
    },
    true
  )
};

@Module({
  providers: [mysqlProvider],
  exports: [mysqlProvider]
})
export class DatabaseModule {}
