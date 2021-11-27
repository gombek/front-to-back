import path from "path";

const dotenv = require("dotenv");
let loadedEnv = dotenv.config({ path: path.resolve(process.cwd(), ".env") });

if (loadedEnv.error) {
  console.warn("[env] No proper '.env' file found. Will try to load defaults.");
  loadedEnv = dotenv.config({
    path: path.resolve(__dirname, "../", ".env.default"),
  });
}
if (loadedEnv.error) {
  throw loadedEnv.error;
}

console.log("[env] Env Loaded:", loadedEnv.parsed);
