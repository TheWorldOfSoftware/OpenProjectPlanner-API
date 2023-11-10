import { Module } from "@nestjs/common";
import BoardController from "./board.controller.js";
import BoardRepository from "../../repositories/board/board.repository.js";

@Module({
  controllers: [BoardController],
  providers: [BoardRepository]
})
export default class BoardModule {}
