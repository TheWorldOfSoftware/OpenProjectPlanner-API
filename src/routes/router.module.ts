import { Module } from "@nestjs/common";
import { RouterModule as NestRouterModule } from "@nestjs/core";
import OrganisationsModule from "./organisations/organisations.module.js";

@Module({
  imports: [
    OrganisationsModule,
    NestRouterModule.register([
      {
        path: "organisations",
        module: OrganisationsModule
      }
    ])
  ]
})
export default class RouterModule {}
