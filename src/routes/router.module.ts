import BoardTeamsModule from "./boards/teams.module.js";
import BoardsModule from "./boards/boards.module.js";
import { Module } from "@nestjs/common";
import { RouterModule as NestRouterModule } from "@nestjs/core";
import OrganisationsModule from "./organisations/organisations.module.js";
import TeamsModule from "./organisations/teams.module.js";

@Module({
  imports: [
    BoardsModule,
    BoardTeamsModule,
    OrganisationsModule,
    TeamsModule,
    NestRouterModule.register([
      {
        module: OrganisationsModule,
        path: "organisations",

        children: [
          {
            module: TeamsModule,
            path: ":organisationId/teams"
          }
        ]
      },
      {
        module: BoardsModule,
        path: "boards",

        children: [
          {
            path: ":boardId/teams",
            module: BoardTeamsModule
          }
        ]
      }
    ])
  ]
})
export default class RouterModule {}
