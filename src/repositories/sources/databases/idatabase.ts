/**
 * Represents a physical database
 */
export default interface IDatabase {
  /**
   * Connect to the database.
   */
  connect: () => Promise<void> | void;
  /**
   * Disconnect from the database.
   */
  disconnect: () => Promise<void> | void;
  /**
   * Execute a query on the database.
   * @param {string} query The query to execute on the database
   * @param {any[]} params Possible additional params
   * @returns Possibly returns a value based on the query provided
   */
  execute: (query: string, params?: readonly unknown[]) => Promise<unknown>;
}
