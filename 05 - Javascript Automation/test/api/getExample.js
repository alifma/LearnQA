const request = require("supertest");
const baseUrl = require("../../env");
const { expect } = require("chai");

describe(`Get Request Example`, () => {
  const response = request(baseUrl()).get("/store/inventory").send();
  it("response status is equal to 200", async () => {
    expect((await response).status).to.equal(200);
  });
  it("response body have sold property", async () => {
    expect((await response).body).to.haveOwnProperty("sold");
  });
});
