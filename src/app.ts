import { Module } from "@nestjs/common";
import RouterModule from "./routes/router.module.js";

@Module({
  imports: [RouterModule]
})
export default class AppModule {}
