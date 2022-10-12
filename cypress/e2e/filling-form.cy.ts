import {PersonalFormPage} from "../page/personal-form.page";

describe("fill and submit a form", ()=>{
  let personalFormPage: PersonalFormPage;

  const personalInformation = {
    name: "Holmes",
    lastName: "Salazar",
    email: "hibarras@email.com",
    gender: "Male",
    mobileNumber: "3656589156",
    hobbies: ["Music", "Reading"],
    currentAddress: "Av siempreViva # 123",
    city: "NCR Delhi",
  };
  before(()=>{
    personalFormPage = new PersonalFormPage();
  });

  it("Then it should fill the form", ()=>{
    personalFormPage.enterToTargetUrl();
    personalFormPage.fillForm(personalInformation); // tasks method

    personalFormPage.validateFormInfo(personalInformation); // Questions or assertions
  });
});
