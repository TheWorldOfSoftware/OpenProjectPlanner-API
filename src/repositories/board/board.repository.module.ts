import { Module } from "@nestjs/common";
import BoardRepository from "./board.repository.js";
import { DatabaseModule } from "../databases/database.module.js";

@Module({
  providers: [BoardRepository],
  imports: [DatabaseModule],
  exports: [BoardRepository]
})
export default class BoardRepositoryModule {}
