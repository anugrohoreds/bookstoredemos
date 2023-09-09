describe("Bookstore Demos Testing",()=>{

    it("Forms Testing",()=>{
        cy.visit("https://demoqa.com");
        cy.contains("Forms").click();
        cy.contains("Practice Form").click();
        cy.get("#firstName").type("Tazkiyah");
        cy.wait(1000);
        cy.get("#lastName").type("Nur Laili Citra Dewi");
        cy.wait(1000);
        cy.get("#userEmail").type("saskiii_8900@gmail.com");
        cy.wait(1000);
        cy.contains("Male").check();
        cy.wait(1000);
        cy.get("#userNumber").type("085236789023");
        cy.wait(1000);
        cy.get("#dateOfBirthInput").click();
        cy.get(".react-datepicker__year-select").select("2000");
        cy.get(".react-datepicker__month-select").select("September");
        cy.get(".react-datepicker__day react-datepicker__day--008").first().select();
        cy.get("#dateOfBirthInput").should("have.value","8 Sep 2000");
        cy.get('.subjects-auto-complete__value-container').type("Proposing");
        cy.wait(1000);
        cy.contains("Sports").check();
        cy.wait(1000);
        cy.get("#uploadPictures").click();
        cy.wait(1000);
        cy.get("#currentAddress").type("Jl. Brigjen Katamso 1 No. 27, Waru, Sidoarjo, Jawa Timur");
        cy.wait(1000);
        cy.get('select[id="state"]').select("NCR").should("have.value","NCR");
        cy.wait(1000);
        cy.get('select[id="city"]').select("Agra").should("have.value","Agra");
        cy.wait(1000)
    });
});
