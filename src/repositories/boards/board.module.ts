import BoardRepository from "./board.repository.js";
import { Module } from "@nestjs/common";
import SourcesModule from "../sources/sources.module.js";

@Module({
  imports: [SourcesModule],
  providers: [BoardRepository],

  exports: [BoardRepository]
})
export default class BoardRepositoryModule {}
