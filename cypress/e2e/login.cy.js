describe("Bookstore Sample Apps",()=>{

    //Normal Login
    it("Login",()=>{
        cy.visit("https://demoqa.com");
        cy.contains("Book Store Application").click();
        cy.contains("Login").click();
        cy.get("#userName").type("Saskiii");
        cy.wait(1000);
        cy.get("#password").type("@5askiii4Gung@");
        cy.wait(1000);
        cy.get("#login").click();
        cy.get("#searchBox").type("Git Pocket Guide");
        cy.contains("Git Pocket Guide").click();
        cy.get("#addNewRecordButton").click();
        cy.get("#searchBox").clear();
        cy.get("#submit").click();
    });

    //Login With False Username
    it("Login w/ False Username",()=>{
        cy.visit("https://demoqa.com");
        cy.contains("Book Store Application").click();
        cy.contains("Login").click();
        cy.get("#userName").type("4s5");
        cy.wait(1000);
        cy.get("#password").type("@5askiii4Gung@");
        cy.wait(1000);
        cy.get("#login").click();
        cy.get("#searchBox").type("Git Pocket Guide");
        cy.contains("Git Pocket Guide").click();
        cy.get("#addNewRecordButton").click();
        cy.get("#searchBox").clear();
        cy.get("#submit").click();
    });

    //Login With Blank Username
    it("Login w/ Blank Username",()=>{
        cy.visit("https://demoqa.com");
        cy.contains("Book Store Application").click();
        cy.contains("Login").click();
        cy.get("#password").type("@5askiii4Gung@");
        cy.wait(1000);
        cy.get("#login").click();
        cy.get("#searchBox").type("Git Pocket Guide");
        cy.contains("Git Pocket Guide").click();
        cy.get("#addNewRecordButton").click();
        cy.get("#searchBox").clear();
        cy.get("#submit").click();
    });

    //Login With False Password
    it("Login w/ False Password",()=>{
        cy.visit("https://demoqa.com");
        cy.contains("Book Store Application").click();
        cy.contains("Login").click();
        cy.get("#userName").type("Saskiii");
        cy.wait(1000);
        cy.get("#password").type("--");
        cy.wait(1000);
        cy.get("#login").click();
        cy.get("#searchBox").type("Git Pocket Guide");
        cy.contains("Git Pocket Guide").click();
        cy.get("#addNewRecordButton").click();
        cy.get("#searchBox").clear();
        cy.get("#submit").click();
    });

    //Login With Blank Password
    it("Login w/ Blank Password",()=>{
        cy.visit("https://demoqa.com");
        cy.contains("Book Store Application").click();
        cy.contains("Login").click();
        cy.get("#userName").type("Saskiii");
        cy.wait(1000);
        cy.get("#login").click();
        cy.get("#searchBox").type("Git Pocket Guide");
        cy.contains("Git Pocket Guide").click();
        cy.get("#addNewRecordButton").click();
        cy.get("#searchBox").clear();
        cy.get("#submit").click();
    });

    //Login With Blank Form
    it("Login w/ Blank Form",()=>{
        cy.visit("https://demoqa.com");
        cy.contains("Book Store Application").click();
        cy.contains("Login").click();
        cy.get("#login").click();
        cy.get("#searchBox").type("Git Pocket Guide");
        cy.contains("Git Pocket Guide").click();
        cy.get("#addNewRecordButton").click();
        cy.get("#searchBox").clear();
        cy.get("#submit").click();
    });
});