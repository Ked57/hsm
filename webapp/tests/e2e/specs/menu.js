describe("The menu page", () => {
  it("Open the menu", () => {
    cy.visit("/");
    cy.get("#showMenuButton").click();
    cy.contains("Button", "Home");
  });
});
