class loginPage {

    selectorList() {
        const selector = {
            usernameField: '[name="username"]',
            passwordField: '[name="password"]',
            loginButton: '.oxd-button',
            wrongCredentialAlert: '.oxd-alert-content > .oxd-text',
        }
        return selector
    }

    accessLoginPage() {
        cy.visit('/auth/login')
    }

    loginWithUser(usarname, password) {
        cy.get(this.selectorList().usernameField).type(usarname)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().loginButton).click()

    }

}

export default loginPage
