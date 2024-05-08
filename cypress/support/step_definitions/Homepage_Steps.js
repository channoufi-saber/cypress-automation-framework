import {
    Given,
    When
} from "@badeball/cypress-cucumber-preprocessor";
const url = "https://webdriveruniversity.com/";

Given(`I navigate to the WebdriverUniversity homepage`, () => {
    cy.visit(url);
});

When(`I click on the contact us button`, () => {
    cy.get("#contact-us").invoke("removeAttr", "target").click();
})