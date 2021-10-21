const app = require("./app");
const nock = require("nock");
const request = require("supertest");

describe("testing nock with supertest", () => {
  nock("http://localhost:9200")
    .filteringPath(() => "/")
    .post("/")
    .reply(200);

  test("get Chunk Norris joke", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
  });
});
