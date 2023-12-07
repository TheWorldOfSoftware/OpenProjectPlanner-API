import { Module } from "@nestjs/common";
import BoardFeatureModule from "../../features/boards/board.module.js";
import BoardsController from "./boards.controller.js";

@Module({
  imports: [BoardFeatureModule],
  controllers: [BoardsController]
})
export default class BoardsModule {}
