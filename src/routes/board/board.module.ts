import { Module } from "@nestjs/common";
import BoardController from "./board.controller.js";
import BoardRepository from "../../repositories/board/board.repository.js";
import { DatabaseModule } from "../../repositories/databases/database.module.js";

@Module({
  controllers: [BoardController],
  providers: [BoardRepository],
  imports: [DatabaseModule]
})
export default class BoardModule {}
