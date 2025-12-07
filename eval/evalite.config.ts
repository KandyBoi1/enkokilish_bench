import { defineConfig } from "evalite/config";
import { createInMemoryStorage } from "evalite/in-memory-storage";
// import { createSqliteStorage } from "evalite/sqlite-storage";

export default defineConfig({
  testTimeout: 600000, // Change according to your test duration. e.g, 10m = 600000ms.
  storage: () => createInMemoryStorage(),
  // storage: () => createSqliteStorage("./storage/evalite.db"),
});
