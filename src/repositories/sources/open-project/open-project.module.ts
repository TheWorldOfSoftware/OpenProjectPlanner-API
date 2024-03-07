import { Module, type ValueProvider } from "@nestjs/common";
import type IDatabase from "../idatabase.js";
import MySQL from "../mysql.js";

const mySQLOpenProjectPlanner: ValueProvider<IDatabase> = {
  provide: "MySQL_OpenProjectPlanner",
  useValue: new MySQL(
    process.env.MYSQL_CONNECTION,
    {
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD
    },
    { defaultSchema: "openprojectplanner", namedPlaceholders: true }
  )
};

@Module({
  providers: [mySQLOpenProjectPlanner],
  exports: [mySQLOpenProjectPlanner]
})
export default class OpenProjectModule {}
