import { Hono } from "hono";

export const app = new Hono()
	.get("/", (c) => c.text("root"))
	.get("/api/awesome", async (c) => {
		return c.streamText(async (stream) => {
			stream.writeln("Hello World!");
			await new Promise((r) => setTimeout(r, 1000));
			stream.writeln("Very cool!");
			await stream.close();
		});
	});

export default app;
