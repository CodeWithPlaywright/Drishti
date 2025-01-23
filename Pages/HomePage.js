exports.HomePage = class HomePage {

    constructor(page) {
        this.page = page
        this.ProfileIcon = page.locator("//button[@aria-haspopup='menu']")
        this.logout = page.locator("//div[text()='Logout']")
        this.MyData= page.locator("//h3[text()='My Data']")
        this.MyIssue = page.locator("//h3[text()='My Issues']")
        this.DrishtiText=page.locator("//div[text()='Drishti']")
        this.ResetPassword = page.locator("//div[text()='Reset Password']")
        this.newIssue= page.locator("//button[text()='NEW ISSUES']")
    }

    async ClickOnMyIsse() 
    {
        await this.MyIssue.click()
    }
    async ClickOnMyData()
    {
        await this.MyData.click()
    }

    async ClickOnProfileIconForLogout()
    {
        await this.ProfileIcon.click()
        await this.logout.click()
        
    }
    async ResetPasswordAction()
    {
        await this.ResetPassword.click()
    }
    async clicknewIssue()
    {
        await this.newIssue.click()
    }

}
