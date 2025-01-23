exports.ProfilePage = class ProfilePage {

    constructor(page) {
        this.page = page
        this.profileText = page.locator("//h2[text()='Profile']")
    }
}