import { hc } from "hono/client";
import { app } from ".";

const client = hc<typeof app>("http://localhost:3000");
console.log("fetching...");
const response = await client.api.awesome.$get();
// no body sad :(
const reader = response.body.getReader();
const decoder = new TextDecoder();
while (true) {
	const { done, value } = await reader.read();
	if (done) break;
	const decoded = decoder.decode(value);
	console.log(decoded);
}
