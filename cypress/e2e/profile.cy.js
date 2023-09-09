describe("Bookstore Sample Apps",()=>{

    //Delete All Books
    it("Profile",()=>{
        cy.visit("https://demoqa.com");
        cy.contains("Book Store Application").click();
        cy.contains("Login").click();
        cy.get("#userName").type("Saskiii");
        cy.wait(1000);
        cy.get("#password").type("@5askiii4Gung@");
        cy.wait(1000);
        cy.get("#login").click();
        cy.get("#submit").click();
        cy.get("#closeSmallModal-ok").click();
    })

    //Delete Account
    it("Profile",()=>{
        cy.visit("https://demoqa.com");
        cy.contains("Book Store Application").click();
        cy.contains("Login").click();
        cy.get("#userName").type("Saskiii");
        cy.wait(1000);
        cy.get("#password").type("@5askiii4Gung@");
        cy.wait(1000);
        cy.get("#login").click();
        cy.get("#submit").click();
        cy.get("#closeSmallModal-ok").click();
    });
});