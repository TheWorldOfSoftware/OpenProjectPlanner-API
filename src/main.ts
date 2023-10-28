import { NestFactory } from "@nestjs/core";
import {
  FastifyAdapter,
  type NestFastifyApplication
} from "@nestjs/platform-fastify";
import BoardModule from "./modules/board.module.js";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    BoardModule,
    new FastifyAdapter()
  );
  await app.listen(3000);
}

bootstrap();
