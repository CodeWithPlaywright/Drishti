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


test.beforeEach('Create New Issues @smoke', async ({ page }) => {

  loginpage = new LoginPage(page);
  loginpage.LaunchURL();
  await loginpage.LoginToAppHR('ifocushr@mailinator.com', 'If@12345');
  //await loginpage.LoginToAppSeniorMgt('bussinessmanagement@mailinator.com','If@12345');
  //await loginpage.LoginToAppEmployee('viju123@mailinator.com','If@12345');


})

test('Create New issue and validate with Sucessful message @smoke', async ({ page }) => {

  const randomSubject = getRandomString('Subject');
  const randomDescription = getRandomString('Description', 10);

  homepage = new HomePage(page);
  myissuepage = new MyIssuesPage(page);

  await homepage.ClickOnMyIsse()
  await myissuepage.clickNewIssue();
  await myissuepage.CreateNewIssue(randomSubject, randomDescription, 'Finance', 'High');
  console.log(`Issue creation successfully completed for Subject: "${randomSubject}"`)
  const successToast = page.locator("//div[contains(text(), 'Issue created successfully')]");

  // Validate the text content of the toast notification
  const toastMessage = await successToast.textContent();
  expect(toastMessage.trim()).toBe('Issue created successfully');

  console.log("Validation successful: Success toast notification displayed with the correct message.");


})

test('Verify navigation post clicking on cancel button', async ({ page }) => {


  homepage = new HomePage(page);
  myissuepage = new MyIssuesPage(page);

  await homepage.ClickOnMyIsse()
  await myissuepage.clickNewIssue()
  await myissuepage.CancelButtonFunctionality();

})

test('Verify navigation post clicking on HR Button', async ({ page }) => {


  homepage = new HomePage(page);
  myissuepage = new MyIssuesPage(page);

  await homepage.ClickOnMyIsse()
  await myissuepage.ClickOnHRButton()
  // Validate the URL of the navigated page
  await expect(page).toHaveURL('https://devdrishti.wiztap.in/hrissues');
  console.log('Successfully navigated to HR Issues page.');

})