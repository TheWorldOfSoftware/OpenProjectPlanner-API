import { Module } from "@nestjs/common";
import BoardController from "../controllers/board.js";

@Module({
  controllers: [BoardController]
})
export default class BoardModule {}
