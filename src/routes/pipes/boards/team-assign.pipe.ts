import { Injectable, type PipeTransform } from "@nestjs/common";
import type { UUID } from "crypto";
import { validate as validateUUID } from "uuid";
import { z } from "zod";

const teamAssignBody = z.strictObject({
  boardId: z.string().refine((id): id is UUID => validateUUID(id)),
  teamIds: z
    .string()
    .refine((id): id is UUID => validateUUID(id))
    .array()
    .nonempty()
});

@Injectable()
export class TeamAssignPipe implements PipeTransform {
  public transform(value: unknown): { boardId: string; teamIds: string[] } {
    return teamAssignBody.parse(value);
  }
}
