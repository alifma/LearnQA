const request = require("supertest");
const baseUrl = require("../../env");
const { expect } = require("chai");

describe(`Post Request Example`, () => {
  const response = request(baseUrl()).post("/store/order").send({
    id: 12930,
    petId: 0,
    quantity: 0,
    shipDate: "2023-04-23T14:42:37.940Z",
    status: "placed",
    complete: true,
  });
  it("response status is equal to 200", async () => {
    expect((await response).status).to.equal(200);
  });
  it("response body have completed property", async () => {
    expect((await response).body).to.haveOwnProperty("complete");
  });
});
