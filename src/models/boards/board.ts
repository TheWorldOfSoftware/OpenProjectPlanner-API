import type { UUID } from "crypto";

export default class Board {
  private _title: string;

  public get title(): string {
    return this._title;
  }

  private set title(value: string) {
    this._title = value;
  }

  private _description: string;

  public get description(): string {
    return this._description;
  }

  private set description(value: string) {
    this._description = value;
  }

  public constructor(
    public readonly organisationId: UUID,
    title: string,
    description: string,
    public readonly id?: UUID
  ) {
    this._title = title;
    this._description = description;
  }

  public toJSON(): object {
    return {
      ...(this.id && { id: this.id }),
      title: this.title,
      description: this.description
    };
  }
}
