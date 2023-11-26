import type { UUID } from "crypto";

export default class Organisation {
  private _name: string;

  public get name(): string {
    return this._name;
  }

  private set name(value: string) {
    this._name = value;
  }

  private _description: string;

  public get description(): string {
    return this._description;
  }

  private set description(value: string) {
    this._description = value;
  }

  public constructor(name: string, description: string, public readonly id?: UUID) {
    this._name = name;
    this._description = description;
  }

  public toJSON(): object {
    return {
      ...(this.id && { id: this.id }),
      name: this.name,
      description: this.description
    }
  }
}