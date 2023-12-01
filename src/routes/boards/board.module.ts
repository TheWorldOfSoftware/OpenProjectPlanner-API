import { Module } from "@nestjs/common";
import BoardFeatureModule from "../../features/boards/board.module.js";
import BoardController from "./board.controller.js";

@Module({
  imports: [BoardFeatureModule],
  controllers: [BoardController]
})
export default class BoardsModule {}
