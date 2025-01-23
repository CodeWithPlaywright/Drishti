import { test, expect } from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
import { HomePage } from '../Pages/HomePage'
import { MyDataHR } from '../Pages/MyDataPageForHR'
import { ProfilePage } from '../Pages/ProfilePage'

let login;
let homePage;
let myData;
let profile;
const email_ID= 'seniormanagement@mailinator.com'
const password= 'If@12345'
const id = '20241234'
test.beforeEach('beforeEach', async ({ page }) => {
  login = new LoginPage(page)

  login.LaunchURL()
})
test('Login to Application As Senior management', async ({ page }) => {
  homePage = new HomePage(page)
  myData = new MyDataHR(page)
  profile = new ProfilePage(page)
  // await page.pause()

  await login.LoginToAppSeniorMgt(email_ID,password)
  await expect(homePage.DrishtiText).toBeVisible()
  await homePage.ClickOnMyData()
  await expect(myData.TotalEmpCOunt).toBeVisible()
  await myData.seniormgtMyData()
  await expect(profile.profileText).toBeVisible()
  
})