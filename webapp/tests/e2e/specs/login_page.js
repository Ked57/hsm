describe("The login page", () => {
  beforeEach(() => localStorage.setItem("vuex", null));
  it("Visits the login URL", () => {
    cy.visit("#/login");
    cy.contains("h1", "Login");
  });
  it("Visits the login URL", () => {
    cy.visit("#/login");
    cy.contains("span", "URL / IP");
  });
  it("Visits the login URL", () => {
    cy.visit("#/login");
    cy.get("#address-input");
  });
  it("Visits the login URL", () => {
    cy.visit("#/login");
    cy.contains("span", "Security Code");
  });
  it("Visits the login URL", () => {
    cy.visit("#/login");
    cy.get("#security-input");
  });
  it("Visits the login URL", () => {
    cy.visit("#/login");
    cy.contains("button", "Login");
  });
});
