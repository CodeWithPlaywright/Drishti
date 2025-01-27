exports.Malinator=class Malinator
{
    constructor(page)
    {
        this.page=page
        this.search= page.locator("//input[@id='search']")
        this.goButton=page.locator("//button[text()='GO']")
        this.message=page.locator("(//td[contains(text(),'internal.apps@ifocussystec.in')])[1]")
        this.submitResponse=page.locator("//a[text()='Submit Response']")
        
    }
    async MalinatorSearch(email)
    {
       await  this.search.fill(email)
       await this.goButton.click()
       
    }
    async openmessage()
    {
        await this.message.click()
        
     
        // await this.submitResponse.click()
    }
}