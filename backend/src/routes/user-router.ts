import { Router } from "https://deno.land/x/oak@v17.1.3/mod.ts";
import UserService from "../services/user-service.ts";

const router = new Router({ prefix: "/api/users" });
const userService = new UserService();

router.get("/", async (ctx) => {
  console.log("entered router")
  try {
    const users = await userService.getAll();
    ctx.response.status = 200;
    ctx.response.body = { success: true, data: users };
  } catch (error) {
    console.error("Error in /users route:", error);
    ctx.response.status = 500;
    ctx.response.body = { success: false, message: "Internal server error" };
  }
});

export default router;