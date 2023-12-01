import { Injectable, type PipeTransform } from "@nestjs/common";
import { z } from "zod";
import Organisation from "../../models/organisation/organisation.js";
import { validate as validateUUID } from "uuid";
import type { UUID } from "crypto";

const organisationBody = z.strictObject({
  id: z
    .string()
    .refine((id): id is UUID => validateUUID(id))
    .optional(),
  name: z.string(),
  description: z.string()
});

@Injectable()
export class OrganisationPipe implements PipeTransform {
  public transform(value: any) {
    const { id, name, description } = organisationBody.parse(value);
    return new Organisation(name, description, id);
  }
}
