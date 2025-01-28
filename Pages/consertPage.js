exports.ConsertPage= class ConsertPage{
    constructor(page)
    {
        this.page=page
        this.createEmp = page.locator("(//span[text()='Create employee'])[1]")
        this.newEmp=page.locator("//button[text()='New Employee +']")
        this.username=page.locator("#userName")
        this.useremail=page.locator("#userEmail")
        this.DOB=page.locator("#DOB")
        this.sendButton=page.locator("//button[text()='Send']")
        this.okayButton=page.locator("//button[text()='Okay']")


    }

    async clickCreateEmp()
    {
       await this.createEmp.click()
    }
    async clickNewEmp()
    {
        await this.newEmp.click()
    }
    async consentFormdetails(email)
    {
        await this.username.fill("vijayalaxmi")
        await this.useremail.fill(email)
        await this.DOB.fill('2000-02-02')
        await this.sendButton.click()
        await this.okayButton.click()
    }
}