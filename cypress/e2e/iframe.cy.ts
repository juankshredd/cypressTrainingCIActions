import "cypress-iframe";
import {IframePage} from "../page/index";

const oIframePage: IframePage = new IframePage();
describe("Working with Iframes", ()=>{
  const expectedTitle2 = "HTML Tutorial";
  const expectedTitle1 = "CSS Tutorial";
  before(()=>{
    oIframePage.visit();
  });

  it("Should locate title", ()=>{
    oIframePage.getFrameTitle().should("eq", expectedTitle2);
  });

  it("Should assert the title of CSS", ()=>{
    oIframePage.goToCssPageInFrame();
    oIframePage.frameLanded();
    oIframePage.getFrameTitle().should("eq", expectedTitle1);
  });
});
