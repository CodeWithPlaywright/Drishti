exports.CreateEmp=class CreateEmp
{
    constructor(page)
    {
        this.page=page
        this.empIDTF= page.locator("#employeeId")
        this.DeptDropDown=page.locator("//span[text()='Select']/..")
        this.FinanceDept = page.locator("//span[text()='Finance']/..")
        this.contactNo = page.locator("#contactNumber")
        this.nextButton = page.locator("//button[text()='Next']")
        this.fatherName = page.locator("#fatherName")
        this.motherName = page.locator("#motherName")
        this.maritalDropDown = page.locator("//label[text()='Marital status']/..//button")
        this.maritalStatus = page.locator("//span[text()='Single']/..")
        this.bloodgroupDP = page.locator("//label[text()='Blood group']/..//button")
        this.bloodGroupOpt = page.locator("//span[text()='O+']/..")
        this.genderDp = page.locator("//label[text()='Gender']/..//button")
        this.genderOpt=page.locator("//span[text()='Female']/..")
        this.emergencyName=page.locator("#emergencyContactName")
        this.emergencyContactNumber=page.locator("#emergencyContactNumber")
        this.nationality = page.locator("#nationality")
        this.aadharNo = page.locator("#aadhaarNo")
        this.pancardNo = page.locator("#panCardNo")
        this.currentAddress = page.locator("#currentAddress")
        this.permanentAddress = page.locator("#permanentAddress")
        this.qualificationDP = page.locator("//label[text()='Qualification']/..//button")
        this.qualification = page.locator("//span[text()='Bachelors']/..")
        this.UniversityTF = page.locator("#university")
        this.specialization = page.locator("#specialization")
        this.percentage = page.locator("#percentage")
        this.startfdate = page.locator("#startDate")
        this.endDate = page.locator("#endDate")
        this.educationalDocuments = page.locator("#educationalDocuments")
        this.expertSkill= page.getByRole('combobox', { name: 'Expert skill set *' })
        this.Design=page.getByLabel('Designation *')
        this.empType=page.getByLabel('Employment type *')
        this.empTypeOpt=page.locator("//span[text()='FullTime']")
        this.client=page.getByLabel('Client *')
        this.clientOpt=page.getByText('Philips')
        this.tagging=page.getByLabel('Tagging *')
        this.taggingOpt=page.getByText('Billable')
        this.statusofEmp=page.getByLabel('Status *')
        this.statusType=page.locator("//span[text()='Active']")
        this.reportingMGR=page.locator("//label[text()='Reporting manager']/..//button")
        this.reportingMGROpt=page.getByText('Jane Smith')
        this.MyProjectDP= page.getByLabel('My project *')
        this.MyProjectOpt= page.getByText('Wiztap')
        this.startDate= page.getByLabel('Start date *')
        this.endDate =page.getByLabel('End date')
        this.stream=page.getByLabel('Stream *')
        this.streamOpt=page.getByRole('option', { name: 'Business Acceleration career' })
        this.Bandlevel=page.locator("//label[text()='Band level']/..//button")
        this.bandOpt=  page.getByText('A2')
        this.location= page.locator("#location")
        this.CCTC= page.locator("#currentCtc")
        this.PreviousCTC=page.locator("#previousCtc")
        this.totalExp=page.locator("#totalYearExperience")
        this.relevantExp=page.locator("#relevantYearExperience")
        this.nameAsPerBank=page.locator("#nameAsPerBank")
        this.BankName= page.locator("#bankName")
        this.bankAccountNo=page.locator("#bankAccountNo")
        this.Bankbranch=page.locator("#branch")
        this.IFSC=page.locator("#ifsc")
        this.submitButton=page.locator("//button[text()='Submit']")

        
        



       


    }


    async provide_empDetails(empId,mobNo,aadharNumber,panNumber)
    {
        await this.empIDTF.fill(empId)
        await this.DeptDropDown.click()
        await this.FinanceDept.click()
        await this.contactNo.fill(mobNo)
        await this.nextButton.click()
        await this.fatherName.fill('Father')
        await this.motherName.fill('Mother')
        await this.maritalDropDown.click()
        await this.maritalStatus.click()
        await this.bloodgroupDP.click()
        await this.bloodGroupOpt.click()
        await this.genderDp.click()
        await this.genderOpt.click()
        await this.emergencyContactNumber.fill(mobNo)
        await this.emergencyName.fill("Gardian")
        await this.nationality.fill("Indian")
        await this.aadharNo.fill(aadharNumber)
        await this.pancardNo.fill(panNumber)
        await this.currentAddress.fill("Cuurent address")
        await this.permanentAddress.fill("permanent address")
        await this.nextButton.click()
        await this.qualificationDP.click()
        await this.qualification.click()
        await this.UniversityTF.fill("VTU")
        await this.specialization.fill("CSE")
        await this.percentage.fill("6")
        await this.startfdate.fill("2024-06")
        await this.endDate.fill("2025-02")
        await this.educationalDocuments.setInputFiles('C:\\Users\\iFocus\\Music\\DrishtiPlaywright\\BDDframeworkStructure.pdf')
        await this.expertSkill.click();
        await this.expertSkill.fill('javascript');
        await this.expertSkill.press('Enter');
        await this.nextButton.click()
        await this.Design.fill("Test engineer")
        await this.empType.click()
        await this.empTypeOpt.click()
        await this.client.click();
        await this.clientOpt.click();
        await this.tagging.click();
        await this.taggingOpt.click();
        await this.statusofEmp.click();
        await this.statusType.click()
        await this.reportingMGR.click()
        await this.reportingMGROpt.click()
        await this.MyProjectDP.click()
        await this.MyProjectOpt.click()
        await this.startDate.fill('2025-01-22');
        await this.endDate.fill('2025-03-07')
        await this.stream.click()
        await this.streamOpt.click()
        await this.Bandlevel.click()
        await this.bandOpt.click()
        await this.location.fill('Bengaluru')
        await this.CCTC.fill('6')
        await this.PreviousCTC.fill('5')
        await this.totalExp.fill('5')
        await this.relevantExp.fill('4')
        await this.nextButton.click()
        await this.nextButton.click()
        await this.nameAsPerBank.fill("name")
        await this.BankName.fill("fedral")
        await this.bankAccountNo.fill("2345123456789")
        await this.Bankbranch.fill("jp nagar")
        await this.IFSC.fill("Efb12345678")
        await this.submitButton.click()

        
        
       
    }
}