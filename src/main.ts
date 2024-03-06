import "dotenv/config";
import "./env.js";
import AppModule from "./app.js";
import { FastifyAdapter } from "@nestjs/platform-fastify";
import { NestFactory } from "@nestjs/core";

const app = await NestFactory.create(AppModule, new FastifyAdapter());
await app.listen(process.env.PORT);
