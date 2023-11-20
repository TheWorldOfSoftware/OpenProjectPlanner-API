import { Module } from "@nestjs/common";
import BoardController from "./board.controller.js";
import BoardFeature from "../../features/board/board.feature.js";
import RepositoryModule from "../../repositories/repository.module.js";

@Module({
  controllers: [BoardController],
  providers: [BoardFeature],
  imports: [RepositoryModule]
})
export default class BoardModule {}
