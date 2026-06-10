import userData from '../fixtures/userdata.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardpage.js'
import MenuPage from '../pages/menuPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
describe('Orange HRM test', () => {
 
  const selectorList = {
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericFiel: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
    nacionalityButton: "[clear='false']",
    genericComboBox: ".oxd-select-text--arrow",
    secondItemCombobox: ".oxd-select-dropdown > :nth-child(3)",
    thirdItemCombobox: ".oxd-select-dropdown > :nth-child(2)",
  }
   
  it.only('User Info Update - Successs', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.usarname, userData.userSuccess.password) 
    dashboardPage.checkDashboardPage() 
    menuPage.accessMyInfo()
   
    cy.get(selectorList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorList.genericFiel).eq(3).clear().type('employee')
    cy.get(selectorList.genericFiel).eq(4).clear().type('OtherIdTest')
    cy.get(selectorList.genericFiel).eq(5).clear().type('DriversLicenseTest')
    cy.get(selectorList.genericFiel).eq(6).clear().type('2026-05-21')
   
    cy.get(selectorList.submitButton).eq(0).click({force: true})
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
    
    cy.get(selectorList.genericComboBox).eq(0).click({force: true})
    cy.get(selectorList.secondItemCombobox).click()
    cy.get(selectorList.genericComboBox).eq(1).click({force: true})
    cy.get(selectorList.thirdItemCombobox).click()

  })

 it('login fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
})