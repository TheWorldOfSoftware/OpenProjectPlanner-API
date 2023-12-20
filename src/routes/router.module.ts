import { BoardTeamsModule } from "./boards/teams.module.js";
import { BoardsModule } from "./boards/board.module.js";
import { Module } from "@nestjs/common";
import { RouterModule as NestRouterModule } from "@nestjs/core";
import { OrganisationsModule } from "./organisations/organisations.module.js";
import { TeamsModule } from "./organisations/team.module.js";

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
          },
          {
            module: BoardsModule,
            path: ":organisationId/boards",

            children: [
              {
                path: ":boardId/teams",
                module: BoardTeamsModule
              }
            ]
          }
        ]
      }
    ])
  ]
})
export class RouterModule {}
