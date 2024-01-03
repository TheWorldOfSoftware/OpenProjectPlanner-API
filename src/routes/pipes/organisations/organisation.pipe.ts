import { Injectable, type PipeTransform } from "@nestjs/common";
import Organisation from "../../../models/organisation/organisation.js";
import type { UUID } from "crypto";
import { validate as validateUUID } from "uuid";
import { z } from "zod";

const organisationBody = z.strictObject({
  description: z.string(),
  id: z.string().refine((id): id is UUID => validateUUID(id)),
  name: z.string()
});

const organisationBodyNew = organisationBody.omit({ id: true });

@Injectable()
export default class OrganisationPipe implements PipeTransform {
  private readonly isNew: boolean;

  public constructor(isNew = false) {
    this.isNew = isNew;
  }

  public transform(value: unknown): Organisation {
    if (this.isNew) {
      const { name, description } = organisationBodyNew.parse(value);
      return new Organisation(name, description);
    }
    const { id, name, description } = organisationBody.parse(value);
    return new Organisation(name, description, id);
  }
}
