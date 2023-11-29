import { Module } from "@nestjs/common";
import { RouterModule as NestRouterModule } from "@nestjs/core";
import OrganisationsModule from "./organisations/organisations.module.js";
import TeamsModule from "./organisations/team.module.js";

@Module({
  imports: [
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
          }
        ]
      }
    ])
  ]
})
export default class RouterModule {}
