import { Module } from "@nestjs/common";
import TeamController from "./teams.controller.js";
import TeamFeatureModule from "features/organisation/team.module.js";

@Module({
  imports: [TeamFeatureModule],
  controllers: [TeamController]
})
export default class TeamsModule {}
