import { Module } from "@nestjs/common";
import MySQL from "./mysql/mysql.js";

const mySQLOpenProjectPlanner = {
  provide: "MySQL_OpenProjectPlanner",
  useValue: new MySQL(
    process.env.MYSQL_CONNECTION,
    {
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD
    },
    "openprojectplanner",
    true
  )
};

@Module({
  providers: [mySQLOpenProjectPlanner],
  exports: [mySQLOpenProjectPlanner]
})
export class DatabaseModule {}
