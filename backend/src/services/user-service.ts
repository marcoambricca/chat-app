import CommonRepository from "../repositories/common-repository.ts";  // Correct path

export default class UserService {
  private commonRepo = new CommonRepository();

  async getAll() {
    try {
      const users = await this.commonRepo.getAll("users");  // Ensure correct table name
      return users;
    } catch (error) {
      console.error("Error in UserService:", error);
      throw new Error("Failed to fetch users");
    }
  }
}
