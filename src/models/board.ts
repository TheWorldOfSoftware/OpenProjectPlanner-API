export default class Board {
  public get id(): string | undefined {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public constructor(
    private readonly _name: string,
    private readonly _id?: string
  ) {}
}
