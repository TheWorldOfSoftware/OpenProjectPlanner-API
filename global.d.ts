import type { NodeEnvOverride } from "./src/modules/process-env/index.ts";

declare global {
  namespace NodeJS {
    interface ProcessEnv extends NodeEnvOverride {}
  }
}
