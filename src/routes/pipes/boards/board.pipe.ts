import { Injectable, type PipeTransform } from "@nestjs/common";
import Board from "../../../models/boards/board.js";
import type { UUID } from "crypto";
import { validate as validateUUID } from "uuid";
import { z } from "zod";

const boardBody = z.strictObject({
  description: z.string(),
  id: z.string().refine((id): id is UUID => validateUUID(id)),
  organisationId: z.string().refine((id): id is UUID => validateUUID(id)),
  title: z.string()
});

const boardBodyNew = boardBody.omit({ id: true });

@Injectable()
export default class BoardPipe implements PipeTransform {
  private readonly isNew: boolean;

  public constructor(isNew = false) {
    this.isNew = isNew;
  }

  public transform(value: unknown): Board {
    if (this.isNew) {
      const { organisationId, title, description } = boardBodyNew.parse(value);
      return new Board(organisationId, { title, description });
    }
    const { id, organisationId, title, description } = boardBody.parse(value);
    return new Board(organisationId, { title, description }, id);
  }
}
