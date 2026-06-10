class menuPage {

    selectorList() {
        const selector= {
             myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',

        }

        return selector
    }

    accessMyInfo() {
        cy.get(this.selectorList().myInfoButton).click()
    }

    accessPerformance() {
        cy.get(this.selectorList().performanceButton).click()
    }
}

export default menuPage