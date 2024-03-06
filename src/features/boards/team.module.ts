import BoardTeamFeature from "./team.feature.js";
import BoardTeamRepositoryModule from "repositories/boards/team.module.js";
import { Module } from "@nestjs/common";

@Module({
  imports: [BoardTeamRepositoryModule],
  providers: [BoardTeamFeature],

  exports: [BoardTeamFeature]
})
export default class BoardTeamFeatureModule {}
