// src/worker/index.ts
import { Hono } from "hono";

type EnvBindings = {
  weddingKv: KVNamespace;
  wedding_bucket: R2Bucket;
};

const app = new Hono<{ Bindings: EnvBindings }>();

app.get("/api/photos", async (c) => {
  try {
    const list = await c.env.weddingKv.list();

    return c.json({
      images: list.keys.map((k) => k.name) ?? [],
    });
  } catch (err) {
    console.error(err);
    return c.json({ images: [] });
  }
});

app.get("/api/photos/:key", async (c) => {
  const key = c.req.param("key");

  const object = await c.env.wedding_bucket.get(key);

  if (!object || !object.body) {
    return c.json({ error: "Not found" }, 404);
  }

  return new Response(object.body, {
    headers: {
      "Content-Type":
        object.httpMetadata?.contentType || "image/jpeg",
      "Cache-Control": "public, max-age=31536000",
    },
  });
});

app.post("/api/upload", async (c) => {
  try {
    const formData = await c.req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return c.json({ error: "Няма прикачен файл." }, 400);
    }

    const key = `${Date.now()}-${file.name}`; // removed extra }

    await c.env.wedding_bucket.put(key, file);

    await c.env.weddingKv.put(
      key,
      JSON.stringify({
        name: file.name,
        uploaded: new Date().toISOString(),
      })
    );

    return c.json({ success: true, key });
  } catch (error) {
    console.error("Upload error:", error);
    return c.json({ error: "Upload failed" }, 500);
  }
});

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
