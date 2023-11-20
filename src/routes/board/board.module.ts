import { Module } from "@nestjs/common";
import BoardController from "./board.controller.js";
import { DatabaseModule } from "../../repositories/databases/database.module.js";
import BoardFeature from "../../features/board/board.feature.js";
import BoardRepository from "../../repositories/board/board.repository.js";

@Module({
  controllers: [BoardController],
  providers: [BoardFeature, BoardRepository],
  imports: [DatabaseModule]
})
export default class BoardModule {}
