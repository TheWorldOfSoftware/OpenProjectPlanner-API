import { Injectable, type PipeTransform } from "@nestjs/common";
import type { UUID } from "crypto";
import { validate as validateUUID } from "uuid";
import { z } from "zod";
import Team from "../../models/organisation/team.js";

const teamBody = z.strictObject({
  id: z.string().refine((id): id is UUID => validateUUID(id)),
  organisationId: z.string().refine((id): id is UUID => validateUUID(id)),
  name: z.string(),
  description: z.string()
});

const teamBodyNew = teamBody.omit({ id: true });

@Injectable()
export class TeamPipe implements PipeTransform {
  public constructor(private readonly isNew = false) {}

  public transform(value: any) {
    if (this.isNew) {
      const { organisationId, name, description } = teamBodyNew.parse(value);
      return new Team(organisationId, name, description);
    }

    const { id, organisationId, name, description } = teamBody.parse(value);
    return new Team(organisationId, name, description, id);
  }
}
