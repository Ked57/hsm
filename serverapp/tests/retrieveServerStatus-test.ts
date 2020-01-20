import test from "ava";
import fetch from "node-fetch";
import of from "await-of";
import { main } from "../src/app";
import { getServerStatus } from "../src/functionalities/server-status";

test.before(async t => {
  process.env.SECURITY_KEY = "key";
  const port = 10001
  const { app, address } = await main(port);
  (t.context as any)["server"] = app;
  (t.context as any)["baseUrl"] = address;
});

test.after(async t => {
  (t.context as any)["server"].close();
});

test("retrieve server status returns the correct result", async t => {
  const [available, pingData, err] = await getServerStatus("google.com");
  !err && available && pingData.avg ? t.pass() : t.fail();
});

test("retrieve server status returns the correct non available result", async t => {
  const [available, __, _] = await getServerStatus(
    "some-random-site-that-doesnt.exists"
  );
  !available ? t.pass() : t.fail();
});

test("the /api endpoint returns the correct result", async t => {
  const result = await fetch(`${(t.context as any)["baseUrl"]}/api`, {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.SECURITY_KEY}` }
  });
  if (!result.ok) {
    t.fail();
    return;
  }
  const [response, err] = await of(result.json());
  if (err) {
    t.fail(err.message);
    return;
  }
  t.deepEqual(response, { hello: "world" });
});
