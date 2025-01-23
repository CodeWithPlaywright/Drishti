import { test, expect } from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
import { MyIssuesPage } from '../Pages/MyIssuesPage'
import { HomePage } from '../Pages/HomePage'

let loginpage;
let homepage;
let myissuepage;

// Function to generate random string
function getRandomString(prefix = 'Test', length = 5) {
  const randomString = Math.random().toString(36).substring(2, 2 + length);
  return `${prefix}${randomString}`;
}


test.beforeEach('Create New Issues', async ({ page }) => {

  loginpage = new LoginPage(page);
  loginpage.LaunchURL();
  await loginpage.LoginToAppHR('ifocushr@mailinator.com', 'If@12345')
  //await loginpage.LoginToAppSeniorMgt('bussinessmanagement@mailinator.com','If@12345')
  //await loginpage.LoginToAppEmployee('viju123@mailinator.com','If@12345')



})

test('Create New Issues', async ({ page }) => {

  const randomSubject = getRandomString('Subject');
  const randomDescription = getRandomString('Description', 10);

  homepage = new HomePage(page);
  myissuepage = new MyIssuesPage(page);

  await homepage.ClickOnMyIsse()
  await myissuepage.clickNewIssue();
  await myissuepage.CreateNewIssue(randomSubject, randomDescription, 'Finance', 'High');
  console.log(`Issue creation successfully completed for Subject: "${randomSubject}"`)

})

test('Verify navigation post clicking on cancel button', async ({ page }) => {


  homepage = new HomePage(page);
  myissuepage = new MyIssuesPage(page);

  await homepage.ClickOnMyIsse()
  await myissuepage.clickNewIssue()
  await myissuepage.CancelButtonFunctionality();

})

