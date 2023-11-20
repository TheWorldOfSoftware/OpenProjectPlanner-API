import { Module } from "@nestjs/common";
import RootModule from "./routes/root/root.module.js";
import BoardModule from "./routes/board/board.module.js";
import { RouterModule } from "@nestjs/core";
import { DatabaseModule } from "./repositories/databases/database.module.js";
import OrganisationModule from "./routes/organisation/organisation.module.js";

@Module({
  imports: [
    RootModule,
    BoardModule,
    OrganisationModule,
    DatabaseModule,
    RouterModule.register([
      {
        path: "organisations",
        module: OrganisationModule,

        children: [
          {
            path: ":organisationid/boards",
            module: BoardModule
          }
        ]
      }
    ])
  ]
})
export default class AppModule {}
