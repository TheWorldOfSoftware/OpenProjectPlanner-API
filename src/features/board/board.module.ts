import { Module } from "@nestjs/common";
import BoardController from "./board.controller.js";

@Module({
  controllers: [BoardController]
})
export default class BoardModule {}
