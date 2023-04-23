describe("Petstore API Inventory Testing", () => {
  it("get store inventory", () => {
    cy.request("GET", "/store/inventory").as("getInventory");
    cy.get("@getInventory").then((inventory) => {
      expect(inventory.status).to.eq(200);
    });
  });

  let body = {
    id: 0,
    petId: 0,
    quantity: 0,
    shipDate: "2023-04-23T14:42:37.940Z",
    status: Cypress.env("username"),
    complete: true,
  };

  it("add/store a new order", () => {
    cy.request("POST", "/store/order", body).as("createOrder");
    cy.get("@createOrder").then((inventory) => {
      expect(inventory.status).to.eq(200);
      expect(inventory.body).to.haveOwnProperty("status");
    });
  });
});
