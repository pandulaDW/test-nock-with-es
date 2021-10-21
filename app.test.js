const app = require("./app");
const nock = require("nock");
const request = require("supertest");

nock("http://localhost:9200")
  .filteringPath(() => "/")
  .post("/")
  .reply(200);

describe("testing nock with supertest", () => {
  test("get Chunk Norris joke", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
  });
});
