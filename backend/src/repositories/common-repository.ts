import PgHelper from "../helpers/pg-helper.ts";

export default class CommonRepository {
  private pg: PgHelper;

  constructor() {
    this.pg = new PgHelper();
  }

  async getAll<T extends Record<string, unknown>>(tableName: string): Promise<T[]> {
    try {
      const sanitizedTableName = this.sanitizeTableName(tableName);
      const query = `SELECT * FROM public.${sanitizedTableName}`;
      const result = await this.pg.excQuery<T>(query);

      console.log("[CommonRepository] Query executed successfully:", query);
      if (result && result.length > 0) {
        return result;
      }

      throw new Error(`[CommonRepository] No records found in table: ${tableName}`);
    } catch (error) {
      console.error("[CommonRepository] Error fetching data:", error);
      throw error;
    }
  }

  private sanitizeTableName(tableName: string): string {
    if (!/^[a-zA-Z0-9_]+$/.test(tableName)) {
      throw new Error(`[CommonRepository] Invalid table name: ${tableName}`);
    }
    return tableName;
  }
}
