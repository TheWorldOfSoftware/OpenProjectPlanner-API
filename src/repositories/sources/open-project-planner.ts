import type { ValueProvider } from "@nestjs/common";
import MySQL from "./databases/mysql/mysql.js";

export const mySQLOpenProjectPlanner: ValueProvider = {
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