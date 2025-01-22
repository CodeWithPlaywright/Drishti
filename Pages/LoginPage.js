exports.LoginPage=class LoginPage {

    constructor(page) {
        this.page = page
        this.usernameTF = page.locator("id=username")
        this.passwordTF = page.locator("id=password")
        this.Loginbutton = page.locator('i:has-text("Login")')
    } 

async LaunchURL()
{
    await this.page.goto('https://the-internet.herokuapp.com/login');
  

}

async LoginToApp(username,password){
    await this.usernameTF.fill(username)
    await this.passwordTF.fill(password)
    await this.Loginbutton.click()

}

}

