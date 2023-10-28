import { NestFactory } from "@nestjs/core";
import BoardModule from "./modules/board.module.js";

async function bootstrap() {
  const app = await NestFactory.create(BoardModule);
  await app.listen(3000);
}

bootstrap();
