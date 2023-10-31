import { Module } from "@nestjs/common";
import BoardModule from "features/board/board.module.js";
import RootModule from "features/root/root.module.js";

@Module({
  imports: [RootModule, BoardModule]
})
export default class AppModule {}
