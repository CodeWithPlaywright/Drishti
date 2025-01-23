import { test, expect } from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
import { HomePage } from '../Pages/HomePage'
import { MyDataHR } from '../Pages/MyDataPageForHR'

let login;
let homePage;
let myData;
const email_ID= 'viju123@mailinator.com'
const password= 'If@12345'
test.beforeEach('beforeEach', async ({ page }) => {
  login = new LoginPage(page)

  login.LaunchURL()
})
test('Login to application as Employee', async ({ page }) => {
  homePage = new HomePage(page)
  myData = new MyDataHR(page)
  // await page.pause()
  await login.LoginToAppEmployee(email_ID,password)
  await homePage.ClickOnMyData()
  let emp_email = await myData.employeeDetails()
  console.log(`spec class ${emp_email} `)
  expect(emp_email).toBe(email_ID)

})