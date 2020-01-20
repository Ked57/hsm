describe("The home page", () => {
  beforeEach(() =>
    localStorage.setItem(
      "vuex",
      `{"manager":{"address":"https://hsm.k3d.dev","key":"key"},"showMenu":false,"servers":{"mine":{"address":"google.com","status":{"isUp":false,"ping":0}}}}`
    )
  );
  it("Visits the home URL", () => {
    cy.visit("/");
    cy.contains("h1", "Home Server Manager");
  });
  it("Visits the home URL", () => {
    cy.visit("/");
    cy.contains("h1", "Server status");
  });
  it("Visits the home URL", () => {
    cy.visit("/");
    cy.contains("button", "On / Off");
  });
  it("Visits the home URL", () => {
    cy.visit("/");
    cy.contains("button", "Add an action");
  });
});
