import type { UUID } from "crypto";

export class Organisation {
  #name: string;

  public get name(): string {
    return this.#name;
  }

  private set name(value: string) {
    this.#name = value;
  }

  #description: string;

  public get description(): string {
    return this.#description;
  }

  private set description(value: string) {
    this.#description = value;
  }

  public readonly id?: UUID;

  public constructor(name: string, description: string, id?: UUID) {
    this.#name = name;
    this.#description = description;
    if (typeof id !== "undefined") {
      this.id = id;
    }
  }

  public toJSON(): object {
    return {
      ...(typeof this.id !== "undefined" && { id: this.id }),
      description: this.description,
      name: this.name
    };
  }
}
