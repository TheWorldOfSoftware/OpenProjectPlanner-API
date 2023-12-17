import { Module } from "@nestjs/common";
import { TeamController } from "./team.controller.js";
import { TeamFeatureModule } from "../../features/organisation/team.module.js";

@Module({
  imports: [TeamFeatureModule],
  controllers: [TeamController]
})
export class TeamsModule {}
