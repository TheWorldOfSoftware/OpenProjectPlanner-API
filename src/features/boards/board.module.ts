import { Module } from "@nestjs/common";
import BoardRepositoryModule from "../../repositories/boards/board.module.js";
import BoardFeature from "./board.feature.js";

@Module({
  imports: [BoardRepositoryModule],
  providers: [BoardFeature],
  exports: [BoardFeature]
})
export default class BoardFeatureModule {}
