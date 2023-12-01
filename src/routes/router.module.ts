import { Module } from "@nestjs/common";
import { RouterModule as NestRouterModule } from "@nestjs/core";
import OrganisationsModule from "./organisations/organisations.module.js";
import TeamsModule from "./organisations/team.module.js";
import BoardsModule from "./boards/board.module.js";

@Module({
  imports: [
    BoardsModule,
    OrganisationsModule,
    TeamsModule,
    NestRouterModule.register([
      {
        path: "organisations",
        module: OrganisationsModule,

        children: [
          {
            path: ":organisationid/teams",
            module: TeamsModule
          },
          {
            path: ":organisationid/boards",
            module: BoardsModule
          }
        ]
      }
    ])
  ]
})
export default class RouterModule {}
