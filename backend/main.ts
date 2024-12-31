import { Application } from "https://deno.land/x/oak@v17.1.3/mod.ts";
import UserRouter from "./src/routes/user-router.ts";
import TestRouter from "./src/routes/test-router.ts";

const app = new Application();
const PORT = 8080;

app.use(UserRouter.routes());
app.use(UserRouter.allowedMethods());
app.use(TestRouter.routes());
app.use(TestRouter.allowedMethods());

app.addEventListener("listen", ({ port }) => {
  console.log(`Server listening on port ${port}`);
});

await app.listen({ port: PORT });