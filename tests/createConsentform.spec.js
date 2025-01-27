import { test, expect } from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
import { HomePage } from '../Pages/HomePage'
import { MyDataHR } from '../Pages/MyDataPageForHR'
import { ConsertPage } from '../Pages/consertPage'
import { EventUtils } from '../utils/EventUtils'
import { CreateEmp } from '../Pages/CreateEmp'
import { Malinator } from '../Pages/mailinator'
const { chromium } = require('playwright');
let login;
let homePage;
let myData;
let consert;
let eventClass;
let createEmp;
let mail;

const id = '20241234'
test.beforeEach('beforeEach', async ({ page }) => {
    login=new LoginPage(page)
    homePage = new HomePage(page)
    myData = new MyDataHR(page)
    consert= new ConsertPage(page)
    createEmp= new CreateEmp(page)
    mail=new Malinator(page)
     eventClass=new EventUtils();
    
  
  })

  
test('create consent form for employeee',async({page})=>
    {
        await login.LaunchURL()
        const email=await eventClass.generateRandomEmail()
        console.log(email)
        await login.LoginToAppHR('ifocushr@mailinator.com', 'If@12345')
        await homePage.ClickOnMyData()
        await myData.ConsentFormButton.click()
        await consert.clickNewEmp()
        await consert.consentFormdetails(email)
        await page.goto("https://www.mailinator.com/")
        await page.pause()
        await mail.MalinatorSearch(email)
        await page.reload()
         
        const frame1=await page.frame('texthtml_msg_body')
        
        await mail.openmessage()
        await page.locator('iframe[name="html_msg_body"]').contentFrame().getByRole('link', { name: 'Submit Response' }).click();
        
        await page.pause()
    


    })
  test.afterEach('after each',async({page})=>
    {
      console.log("after each")
    })
    