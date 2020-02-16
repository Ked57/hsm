import { exec } from "child_process";
import { promisify } from "util";
import { Server } from "./server.types";

const execAsync = promisify(exec);

export const runCommand = (command: string, server?: Server) => execAsync(`${server ? `ssh ${server.user}:${server.password}@${server.address}` : ""} | ${command}`);
