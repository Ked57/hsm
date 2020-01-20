import test from "ava";
import fetch from "node-fetch";
import of from "await-of";
import { main } from "../src/app";

test.before(async t => {
  process.env.SECURITY_KEY = "key";
  const port = 10000;
  const { app, address } = await main(port);
  (t.context as any)["server"] = app;
  (t.context as any)["baseUrl"] = address;
});

test.after(async t => {
  (t.context as any)["server"].close();
});

test("/server/list returns the correct result", async t => {
  const result = await fetch(
    `${(t.context as any)["baseUrl"]}/api/server/list`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${process.env.SECURITY_KEY}` }
    }
  );
  if (!result.ok) {
    t.fail();
    return;
  }
  const [response, err] = await of(result.json());
  if (err) {
    t.fail(err.message);
    return;
  }
  t.deepEqual(response, {});
});

test("/server/add adds a server", async t => {
  const resultAdd = await fetch(
    `${(t.context as any)["baseUrl"]}/api/server/add`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${process.env.SECURITY_KEY}` },
      body: JSON.stringify({
        name: "google",
        address: "google.com"
      })
    }
  );
  if (!resultAdd.ok) {
    t.fail();
    return;
  }
  const result = await fetch(
    `${(t.context as any)["baseUrl"]}/api/server/list`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${process.env.SECURITY_KEY}` }
    }
  );
  if (!result.ok) {
    t.fail();
    return;
  }
  const [response, err] = await of(result.json());
  if (err) {
    t.fail(err.message);
    return;
  }
  t.deepEqual(response, {
    google: {
      address: "google.com"
    }
  });
});
