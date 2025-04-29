describe("Newsletter Subscription form", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    it("allows a user to subscribe to the email list", () => {
        cy.getByData("email-input").type('tom@aol.com')
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("exist").contains("tom@aol.com")
    })

    it("does not allow a user to subscribe with an invalid email", () => {
        cy.getByData("email-input").type('tom')
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("not.exist")
    })

    it("shows an error message when the email is already subscribed", () => {
        cy.getByData("email-input").type('john@example.com')
        cy.getByData("submit-button").click()
        cy.getByData("server-error-message").should("exist").contains("john@example.com")
    })
})