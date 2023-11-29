import { Injectable, type PipeTransform } from "@nestjs/common";
import { z } from "zod";
import Organisation from "../../../models/organisation/organisation.js";
import { validate as validateUUID } from "uuid";
import type { UUID } from "crypto";

const organisationBody = z.strictObject({
  id: z.string().refine((id): id is UUID => validateUUID(id)),
  name: z.string(),
  description: z.string()
});

const organisationBodyNew = organisationBody.omit({ id: true });

@Injectable()
export class OrganisationPipe implements PipeTransform {
  public constructor(private readonly isNew = false) {}

  public transform(value: any) {
    if (this.isNew) {
      const { name, description } = organisationBodyNew.parse(value);
      return new Organisation(name, description);
    }

    const { id, name, description } = organisationBody.parse(value);
    return new Organisation(name, description, id);
  }
}
