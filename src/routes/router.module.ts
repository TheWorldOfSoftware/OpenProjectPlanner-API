import { Module } from "@nestjs/common";
import RootModule from "./root/root.module.js";
import BoardModule from "./board/board.module.js";
import OrganisationModule from "./organisation/organisation.module.js";
import { RouterModule as NestRouterModule } from "@nestjs/core";

@Module({
  imports: [
    RootModule,
    BoardModule,
    OrganisationModule,
    NestRouterModule.register([
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
export default class RouterModule {}
