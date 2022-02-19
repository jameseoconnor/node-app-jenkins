import request from "supertest";
import app from "../app.js";

describe("GET /", () => {
  it("respond with Hello World", (done) => {
    request(app).get("/").expect("hello world", done);
  });
});
