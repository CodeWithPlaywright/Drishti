exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page
        this.usernameTF = page.locator("#email")
        this.passwordTF = page.locator("id=password")
        this.SignInbutton = page.locator("//button[text()='Sign in']")
        this.ProfileIcon = page.locator("//button[@aria-haspopup='menu']")
        this.logout = page.locator("//div[text()='Logout']")
    }

    async LaunchURL() {
        await this.page.goto('https://devdrishti.wiztap.in/landing');


    }

    async LoginToAppHR(username, password) {
        await this.usernameTF.fill(username)
        await this.passwordTF.fill(password)
        await this.SignInbutton.click()
    }
    async LoginToAppSeniorMgt(username, password) {
        await this.usernameTF.fill(username)
        await this.passwordTF.fill(password)
        await this.SignInbutton.click()
    }
    async LoginToAppEmployee(username, password) {
        await this.usernameTF.fill(username)
        await this.passwordTF.fill(password)
        await this.SignInbutton.click()

    }
    async LogoutFromApplication() {
        await this.ProfileIcon.click()
        await this.logout.click()
    }
}

