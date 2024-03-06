import BoardTeamFeatureModule from "features/boards/team.module.js";
import BoardTeamsController from "./teams.controller.js";
import { Module } from "@nestjs/common";

@Module({
  imports: [BoardTeamFeatureModule],
  controllers: [BoardTeamsController]
})
export default class BoardTeamsModule {}
