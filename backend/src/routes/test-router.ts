import { Router } from "https://deno.land/x/oak@v17.1.3/mod.ts";

const router = new Router({ prefix: "/api/test" });

router.get("/", async (ctx) => {
    ctx.response.body = { success: true, message: "Endpoint working." };
    ctx.response.status = 200;
});

export default router;