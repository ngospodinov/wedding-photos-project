// src/worker/index.ts
import { Hono } from "hono";

type EnvBindings = {
  weddingKv: KVNamespace;
  wedding_bucket: R2Bucket;
};

const app = new Hono<{ Bindings: EnvBindings }>();

app.get("api/photos")

app.post("api/upload", async (c) => {
  const formData = await c.req.formData();
  const file = formData.get("file") as File | null;
  if(!file) return c.json({error: "Няма прикачен файл."}, 400);
  
  const key = `${Date.now()}-${file.name}}`;
  await c.env.wedding_bucket.put(key, file);

  await c.env.weddingKv.put(key, JSON.stringify({
    name: file.name,
    uploaded: new Date().toISOString(),
  }))

  return c.json({success: true, key});
});

// Export a fetch handler for Cloudflare
export default {
  fetch: app.fetch,
};
