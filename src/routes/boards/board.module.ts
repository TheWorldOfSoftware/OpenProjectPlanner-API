import { BoardFeatureModule } from "../../features/boards/board.module.js";
import { BoardsController } from "./boards.controller.js";
import { Module } from "@nestjs/common";

@Module({
  imports: [BoardFeatureModule],
  controllers: [BoardsController]
})
export class BoardsModule {}
