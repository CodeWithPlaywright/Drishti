exports.MyDataHR = class MyDataHR {

    constructor(page) {
        this.page = page
        this.ConsentFormButton = page.locator("//span[text()='Consent Form']/..")
        this.search = page.getByPlaceholder("Search...")
        this.viewDetailsCTA = page.locator("//a[text()='View Details']")
        this.employeeIDText = page.locator("//span[text()='Employee ID']/..//span[2]")
        this.employee_email = page.locator("//span[text()='E-mail address']/..//span[2]")
        this.TotalEmpCOunt = page.locator("//p[text()='Total No. of employee’s']")
        this.ViewDetailsInSnrMgt = page.locator("(//td[text()='View Details'])[1]")
    }


    async searchEmployee(employeeID) {
        await this.search.fill(employeeID)
        // await this.search.press('ArrowDown')
         await this.search.press('Enter')
         await this.viewDetailsCTA.click()
        const id = await this.employeeIDText.innerText()
        return id;

    }

    async employeeDetails()
    {
        const email=await this.employee_email.innerText()
        return email;
    }

    async seniormgtMyData()
    {
        // await this.search.fill(employeeID1)
        await this.ViewDetailsInSnrMgt.click()

    }
    
}