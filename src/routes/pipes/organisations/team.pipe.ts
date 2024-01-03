import { Injectable, type PipeTransform } from "@nestjs/common";
import Team from "../../../models/organisation/team.js";
import type { UUID } from "crypto";
import { validate as validateUUID } from "uuid";
import { z } from "zod";

const teamBody = z.strictObject({
  description: z.string(),
  id: z.string().refine((id): id is UUID => validateUUID(id)),
  name: z.string(),
  organisationId: z.string().refine((id): id is UUID => validateUUID(id))
});

const teamBodyNew = teamBody.omit({ id: true });

@Injectable()
export default class TeamPipe implements PipeTransform {
  private readonly isNew: boolean;

  public constructor(isNew = false) {
    this.isNew = isNew;
  }

  public transform(value: unknown): Team {
    if (this.isNew) {
      const { organisationId, name, description } = teamBodyNew.parse(value);
      return new Team(organisationId, { name, description });
    }
    const { id, organisationId, name, description } = teamBody.parse(value);
    return new Team(organisationId, { name, description }, id);
  }
}
