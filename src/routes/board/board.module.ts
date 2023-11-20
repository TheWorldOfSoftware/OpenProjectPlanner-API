import { Module } from "@nestjs/common";
import BoardController from "./board.controller.js";
import BoardFeature from "../../features/board/board.feature.js";
import BoardRepositoryModule from "../../repositories/board/board.repository.module.js";

@Module({
  controllers: [BoardController],
  providers: [BoardFeature],
  imports: [BoardRepositoryModule]
})
export default class BoardModule {}
