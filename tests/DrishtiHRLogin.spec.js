import {test,expect} from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'

let login 

test.beforeEach('beforeEach',async({page})=>
{
  login = new LoginPage(page)
  login.LaunchURL()
})
test('Drishti login',async({page})=>
{
  await page.pause()
  await login.LoginToAppHR('ifocushr@mailinator.com', 'If@12345')
  
})

test('Drishti login By senior management',async({page})=>
  {
    await login.LoginToAppSeniorMgt('seniormanagement@mailinator.com','If@12345')
    
  })

  test('Drishti login by employee',async({page})=>
    {
      await login.LoginToAppEmployee('viju123@mailinator.com','If@12345') 
    })

test.afterEach('afterEach',async({page})=>
{
  await login.LogoutFromApplication()
    
})
