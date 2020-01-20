import tcpp, { Result } from "tcp-ping";
import { of } from "await-of";
import { promisify } from "util";

const probe = promisify(tcpp.probe);
const ping = promisify(tcpp.ping);

export const getServerStatus = async (
  address: string
): Promise<[boolean, Partial<Result>, Error | undefined]> => {
  const [available, errProbe] = await of(probe(address, 80));
  if (errProbe || !available) {
    return [available, {}, errProbe];
  }
  const [pingData, errPing] = await of(ping({ address }));
  if (errPing) {
    return [available, {}, errPing];
  }
  return [available, pingData, undefined];
};
