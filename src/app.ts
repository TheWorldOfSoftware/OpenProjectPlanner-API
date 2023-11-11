import { Module } from "@nestjs/common";
import RootModule from "./routes/root/root.module.js";
import BoardModule from "./routes/board/board.module.js";
import { RouterModule } from "@nestjs/core";
import { DatabaseModule } from "./repositories/databases/database.module.js";

@Module({
  imports: [
    RootModule,
    BoardModule,
    DatabaseModule,
    RouterModule.register([
      {
        path: "boards",
        module: BoardModule
      }
    ])
  ]
})
export default class AppModule {}
