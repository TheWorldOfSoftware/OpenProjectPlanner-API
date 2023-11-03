import { Module } from "@nestjs/common";
import BoardModule from "./features/board/board.module.js";
import RootModule from "./features/root/root.module.js";
import { RouterModule } from "@nestjs/core";

@Module({
  imports: [
    RootModule,
    BoardModule,
    RouterModule.register([
      {
        path: "boards",
        module: BoardModule
      }
    ])
  ]
})
export default class AppModule {}
