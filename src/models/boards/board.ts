import type { UUID } from "crypto";

export class Board {
  #title: string;

  public get title(): string {
    return this.#title;
  }

  private set title(value: string) {
    this.#title = value;
  }

  #description: string;

  public get description(): string {
    return this.#description;
  }

  private set description(value: string) {
    this.#description = value;
  }

  public readonly organisationId: UUID;

  public readonly id?: UUID;

  public constructor(
    organisationId: UUID,
    {
      title,
      description
    }: { readonly title: string; readonly description: string },
    id?: UUID
  ) {
    this.organisationId = organisationId;
    this.#title = title;
    this.#description = description;
    if (typeof id !== "undefined") {
      this.id = id;
    }
  }

  public toJSON(): object {
    return {
      ...(typeof this.id !== "undefined" && { id: this.id }),
      description: this.description,
      organisationId: this.organisationId,
      title: this.title
    };
  }
}
