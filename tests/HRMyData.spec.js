import { test, expect } from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
import { HomePage } from '../Pages/HomePage'
import { MyDataHR } from '../Pages/MyDataPageForHR'
import { ConsertPage } from '../Pages/consertPage'
import { EventUtils } from '../utils/EventUtils'
import { CreateEmp } from '../Pages/CreateEmp'

let login;
let homePage;
let myData;
let consert;
let eventClass;
let createEmp;

const id = '20241234'

test.beforeEach('beforeEach @smoke', async ({ page }) => {
  login=new LoginPage(page)
  homePage = new HomePage(page)
  myData = new MyDataHR(page)
  consert= new ConsertPage(page)
  createEmp= new CreateEmp(page)
  await login.LaunchURL()
  // await page.pause()
  await login.LoginToAppHR('ifocushr@mailinator.com', 'If@12345')
  await homePage.ClickOnMyData()

})
test('Login To Application as HR', async ({ page }) => {
  
  let empID = await myData.searchEmployee(id)
  // console.log(`spec class ${empID} `)
   expect(id).toBe(empID)

})

test('create employeee @smoke' ,async({page})=>
{
  await myData.ConsentFormButton.click()
  
  await consert.clickCreateEmp()
  await page.pause()
  eventClass=new EventUtils();
  const emp= await eventClass.getRandomEmpID()
  // console.log(emp)
  const mobileNo=await eventClass.getMobilenumber()
  const aadhar=await eventClass.getAadharNumber()
  const panNumber=await eventClass.generatePanNumber()
  await createEmp.provide_empDetails(emp,mobileNo,aadhar,panNumber)
  await page.pause()


})

test.afterEach('after each',async({page})=>
{
  console.log("after each")
})
