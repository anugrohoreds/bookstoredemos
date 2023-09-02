describe("Web Testing Demos of Elements",()=>{

    it("Textbox",()=>{
        cy.visit("https://demoqa.com")
        cy.contains("Elements").click()
        cy.contains("Text Box").click()
        cy.get("#userName").type("saskiii")
        cy.get("#userEmail").type("saskiii_892000@gmail.com")
        cy.get("#currentAddress").type("Jl. Brigjen Katamso 1 No. 27")
        cy.get("#permanentAddress").type("Jl. Brigjen Katamso 1 No. 27, Waru, Sidoarjo")
        cy.get("#submit").click()
    })

    it("Checkbox",()=>{
        cy.visit("https://demoqa.com")
        cy.contains("Elements").click()
        cy.contains("Check Box").click()
        cy.get('.rct-option-expand-all').click()
        cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > .rct-node-expanded > ol > :nth-child(1) > .rct-text > label > .rct-checkbox > .rct-icon > path').click({multiple: true})
    })

     it("Radio Button",()=>{
        cy.visit("https://demoqa.com")
        cy.contains("Elements").click()
        cy.contains("Radio Button").click()
        cy.get(':nth-child(2) > .custom-control-label').click()
    })

    it("Table",()=>{
        cy.visit("https://demoqa.com")
        cy.contains("Elements").click()
        cy.contains("Web Table").click()
        cy.get("#addNewRecordButton").click()
        cy.get("#firstName").type("Tazkiyah Nurlaili")
        cy.get("#lastName").type("Citra Dewi")
        cy.get("#userEmail").type("saskiii_892000@gmail.com")
        cy.get("#age").type("23")
        cy.get("#salary").type("1000000")
        cy.get("#department").type("Ekonomi Bisnis")
        cy.get("#submit").click()
        cy.get("#searchBox").type("Tazkiyah Nurlaili Citra Dewi").clear()
    })

    it("Buttons",()=>{
        cy.visit("https://demoqa.com")
        cy.contains("Elements").click()
        cy.contains("Buttons").click()
        cy.get("#doublelClickBtn").dblclick({multiple:true})
        cy.get("#rightClickBtn").rightclick({multiple:true})
        cy.get("#Lplua").click({multiple:true})
    })

    it("Links",()=>{
        cy.visit("https://demoqa.com")
        cy.contains("Elements").click()
        cy.contains("Links").click()
        cy.contains("Created").click()
    })

    it("Links",()=>{
        cy.visit("https://demoqa.com")
        cy.contains("Elements").click()
        cy.contains("Broken Links-Images").click()
        cy.contains("Click Here for Valid Link").click()
    })

    it("Download",()=>{
        cy.visit("https://demoqa.com")
        cy.contains("Elements").click()
        cy.contains("Upload and Downloads").click()
        cy.get("#downloadButton").click()
    })

    it("Upload",()=>{
        cy.visit("https://demoqa.com")
        cy.contains("Elements").click()
        cy.contains("Upload and Downloads").click()
        cy.get("#uploadFile").click()
    })

    it("Dynamic Properties",()=>{
        cy.visit("https://demoqa.com")
        cy.contains("Elements").click()
        cy.contains("Dynamic Properties").click()
        cy.get("#colorChange").click()
    })
})