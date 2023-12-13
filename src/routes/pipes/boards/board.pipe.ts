import { Injectable, type PipeTransform } from "@nestjs/common";
import Board from "../../../models/boards/board.js";
import type { UUID } from "crypto";
import { validate as validateUUID } from "uuid";
import { z } from "zod";

const boardBody = z.strictObject({
  id: z
    .string()
    .refine((id): id is UUID => validateUUID(id))
    .optional(),
  organisationId: z.string().refine((id): id is UUID => validateUUID(id)),
  title: z.string(),
  description: z.string()
});

@Injectable()
export class BoardPipe implements PipeTransform {
  public transform(value: any) {
    const { id, organisationId, title, description } = boardBody.parse(value);
    return new Board(organisationId, title, description, id);
  }
}