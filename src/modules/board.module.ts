import { Module } from "@nestjs/common";
import BoardController from "../controllers/board.controller.js";

@Module({
  controllers: [BoardController]
})
export default class BoardModule {}
