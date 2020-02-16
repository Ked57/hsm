import { FastifyRequest, FastifyReply } from "fastify";
import { Server } from "../util/server.types";
import { parseBody } from "../util/body-parsing";
import { runCommand } from "../util/run-command";

export const requestToogleServerStatus = async (
    req: FastifyRequest,
    res: FastifyReply<any>
  ) => {
      const {targetState, server}: {targetState: boolean, server: Server} = parseBody(req.body);
      console.log("targetState", targetState);
      console.log("server", server);
      const commandResult = await runCommand("wakeonlan -i 192.168.1.255 74:D0:2B:93:C3:2C");
      if(commandResult.stderr) {
          console.error("ERROR: ", commandResult.stderr);
      }
      console.log("SUCCESS: ",commandResult.stdout);
      res.send({targetState});
  }