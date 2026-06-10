class dashboardPage {

    selectorList() {
        const selector = {
            dashboardGrid: ".orangehrm-dashboard-grid",

        }

        return selector
    }

    checkDashboardPage() {
        cy.location('pathname').should('equal' , '/web/index.php/dashboard/index')
        cy.get(this.selectorList().dashboardGrid).should('be.visible')
    }
}

export default dashboardPage