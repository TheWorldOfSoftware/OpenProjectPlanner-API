import BoardFeatureModule from "features/board/board.module.js";
import BoardsController from "./boards.controller.js";
import { Module } from "@nestjs/common";

@Module({
  imports: [BoardFeatureModule],
  controllers: [BoardsController]
})
export default class BoardsModule {}
