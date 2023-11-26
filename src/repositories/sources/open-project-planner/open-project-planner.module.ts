import { Module, type ValueProvider } from "@nestjs/common";
import MySQL from "../databases/mysql/mysql.js";

const mySQLOpenProjectPlanner: ValueProvider = {
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
export default class OpenProjectPlannerModule {}