// src/worker/index.ts
import { Hono } from "hono";

type EnvBindings = {
  weddingKv: KVNamespace;
  wedding_bucket: R2Bucket;
};

const app = new Hono<{ Bindings: EnvBindings }>();

app.get("/api/", (c) => c.json({ name: "MAINA" }));

app.get("/test", async (c) => {
  const value = await c.env.weddingKv.get("test-value");
  return c.json({ name: value ?? null });
});

// Export a fetch handler for Cloudflare
export default {
  fetch: app.fetch,
};
