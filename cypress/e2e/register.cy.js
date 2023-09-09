describe("Bookstore Sample Apps",()=>{

    //Normal Register
    it("Register",()=>{
        cy.visit("https://demoqa.com");
        cy.contains("Book Store Application").click();
        cy.contains("Login").click();
        cy.get("#newUser").click()
        cy.wait(1000);
        cy.get("#firstname").type("Tazkiyah");
        cy.wait(1000);
        cy.get("#lastname").type("Nur Laili Citra Dewi");
        cy.wait(1000);
        cy.get("#userName").type("saskii_8900@gmail.com");
        cy.wait(1000);
        cy.get("#password").type("4ku5ay4n9Agung");
        cy.wait(1000);
        cy.get("#register").click();
    });

    //Register w/ Blank Form
    it("Register With Blank Form",()=>{
        cy.visit("https://demoqa.com");
        cy.contains("Book Store Application").click();
        cy.contains("Login").click();
        cy.get("#newUser").click()
        cy.get("#register").click();
    });

    //Register By Using Wrong Formatting of First & Last Name 
    it("Register By Using Wrong Formatting of First & Last Name",()=>{
        cy.visit("https://demoqa.com");
        cy.contains("Book Store Application").click();
        cy.contains("Login").click();
        cy.get("#newUser").click()
        cy.wait(1000);
        cy.get("#firstname").type("1-");
        cy.wait(1000);
        cy.get("#lastname").type("@u");
        cy.wait(1000);
        cy.get("#userName").type("saskii_8900@gmail.com");
        cy.wait(1000);
        cy.get("#password").type("4ku5ay4n9Agung");
        cy.wait(1000);
        cy.get("#register").click();
    });

    //Register w/ Blank First & Last Name
    it("Register With Blank First & Last Name",()=>{
        cy.visit("https://demoqa.com");
        cy.contains("Book Store Application").click();
        cy.contains("Login").click();
        cy.get("#newUser").click()
        cy.wait(1000);
        cy.get("#userName").type("saskii_8900@gmail.com");
        cy.wait(1000);
        cy.get("#password").type("4ku5ay4n9Agung");
        cy.wait(1000);
        cy.get("#register").click();
    });

    //Register By Using Wrong Formatting of Email
    it("Register By Using Wrong Formatting of Email",()=>{
        cy.visit("https://demoqa.com");
        cy.contains("Book Store Application").click();
        cy.contains("Login").click();
        cy.get("#newUser").click()
        cy.wait(1000);
        cy.get("#firstname").type("Tazkiyah");
        cy.wait(1000);
        cy.get("#lastname").type("Nur Laili Citra Dewi");
        cy.wait(1000);
        cy.get("#userName").type("saskii_8900@com");
        cy.wait(1000);
        cy.get("#password").type("4ku5ay4n9Agung");
        cy.wait(1000);
        cy.get("#register").click();
    });

    //Register w/ Blank Email
    it("Register With Blank Email",()=>{
        cy.visit("https://demoqa.com");
        cy.contains("Book Store Application").click();
        cy.contains("Login").click();
        cy.get("#newUser").click()
        cy.wait(1000);
        cy.get("#firstname").type("Tazkiyah");
        cy.wait(1000);
        cy.get("#lastname").type("Nur Laili Citra Dewi");
        cy.wait(1000);
        cy.get("#password").type("4ku5ay4n9Agung");
        cy.wait(1000);
        cy.get("#register").click();
    });

    //Register By Using False Password
    it("Register By Using Wrong Formatting of Email",()=>{
        cy.visit("https://demoqa.com");
        cy.contains("Book Store Application").click();
        cy.contains("Login").click();
        cy.get("#newUser").click()
        cy.wait(1000);
        cy.get("#firstname").type("Tazkiyah");
        cy.wait(1000);
        cy.get("#lastname").type("Nur Laili Citra Dewi");
        cy.wait(1000);
        cy.get("#userName").type("saskii_8900@com");
        cy.wait(1000);
        cy.get("#password").type("3r");
        cy.wait(1000);
        cy.get("#register").click();
    });

    //Register By Using Blank Password
    it("Register By Using Wrong Formatting of Email",()=>{
        cy.visit("https://demoqa.com");
        cy.contains("Book Store Application").click();
        cy.contains("Login").click();
        cy.get("#newUser").click()
        cy.wait(1000);
        cy.get("#firstname").type("Tazkiyah");
        cy.wait(1000);
        cy.get("#lastname").type("Nur Laili Citra Dewi");
        cy.wait(1000);
        cy.get("#userName").type("saskii_8900@com");
        cy.wait(1000);
        cy.get("#register").click();
    });
});