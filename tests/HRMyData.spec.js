import { test, expect } from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
import { HomePage } from '../Pages/HomePage'
import { MyDataHR } from '../Pages/MyDataPageForHR'

let login;
let homePage;
let myData;
const id = '20241234'
test.beforeEach('beforeEach', async ({ page }) => {
  login = new LoginPage(page)

  login.LaunchURL()
})
test('Login To Application as HR', async ({ page }) => {
  homePage = new HomePage(page)
  myData = new MyDataHR(page)
  // await page.pause()
  await login.LoginToAppHR('ifocushr@mailinator.com', 'If@12345')
  await homePage.ClickOnMyData()
  let empID = await myData.searchEmployee(id)
  console.log(`spec class ${empID} `)
  expect(id).toBe(empID)

})
