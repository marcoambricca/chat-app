import * as postgres from "https://deno.land/x/postgres@v0.19.3/mod.ts";
import { DBCONFIG } from "../config/dbconfig.ts";

export default class PgHelper {
  private client = new postgres.Client(DBCONFIG);

  async excQuery<T = Record<string, unknown>>(query: string, values: Array<unknown> = []): Promise<T[] | undefined> {
    try {
      await this.client.connect();
      const result = await this.client.queryObject<T>(query, values);
      return result.rows;
    } catch (error) {
      console.log("Database error:", error);
      return undefined;
    } finally {
      await this.client.end();
    }
  }
}
