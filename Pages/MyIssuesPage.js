exports.MyIssuesPage = class MyIssuesPage {

    constructor(page) {
        this.page = page
        this.SearchTF = page.locator("id=headlessui-combobox-input-:rk:")
        this.NewIssuesButton = page.locator("//button[text()='NEW ISSUES']")
        this.HRButton = page.locator("//div[text()='HR']")
        this.SeniorManagemenrButton = page.locator("//button//div[text()='Senior Management']")
        this.SalesButton = page.locator("//button//div[text()='Sales']")
        this.FinanceButton = page.locator("//button//div[text()='Finance']")
        this.NextButton = page.locator("//button[text()='Next']")
        this.PreviousButton = page.locator("//button[text()='Previous']")
        this.logout = page.locator("//div[text()='Logout']")
        this.SubjectTF = page.locator('input[placeholder="Subject"]')
        this.WriteDescriptionTF = page.locator('textarea[placeholder="Write a description..."]')
        this.AttachFile = page.locator("//label[text()='Attach a File']")
        this.CancelButton = page.locator("//button[text()='Cancel']")
        this.SubmitButton = page.locator("//button[text()='Submit']")
        this.AssignDropDown = page.locator("//div[text()='Assign']")
        this.PriorityDropDown = page.locator("//div[text()='Priority']")
        this.AssignDropDownComponents = page.locator("//div[text()='Assign']/..//div[contains(@class,'block border')]")
        this.PriorityDropDownComponents = page.locator("//div[text()='Priority']/..//div[contains(@class,'block border')]")


    }

    async clickNewIssue() {
        await this.NewIssuesButton.click()

    }


    async CreateNewIssue(subject, description, assignTo, priorityTo) {
        await this.SubjectTF.fill(subject)
        await this.WriteDescriptionTF.fill(description)
        await this.AssignDropDown.click()
        await this.page.locator(`//div[text()='Assign']/..//div[contains(@class,'block border-b') and text()='${assignTo}']`).click()
        await this.PriorityDropDown.click()
        await this.page.locator(`//div[text()='Priority']/..//div[contains(@class,'block border') and text()='${priorityTo}']`).click()
        await this.SubmitButton.click()
        //  console.log(`Issue creation successfully completed for Subject: "${subject}", Assigned to: "${assignTo}", with Priority: "${priorityTo}"`)

    }

    async CancelButtonFunctionality() {
        await this.CancelButton.click()
        console.log("Post clicking on cancel button sucessfully navigate to the my issue page")

    }


}
