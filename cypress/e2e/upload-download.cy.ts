import {Upload} from "../page/index";
import {DownloadPage} from "../page/index";

const upload: Upload = new Upload();
const download: DownloadPage = new DownloadPage();

describe("Upload and download a file", ()=>{
  const targetFile = "textForTest.txt";
  const expectedUploadText = "textForTest";
  const expectedFileName = "sampleFile.jpeg";

  before(()=>{
    cy.fixture("upload");
  });

  it("Should upload a file", ()=>{
    upload.visitTestPage();
    upload.uploadFile(targetFile);
    upload.getTitle().should("contain.text", expectedUploadText);
  });

  it("Should download a file", ()=>{
    download.visitPage();
    download.downloadFile();
    download.verifyDownloadFileContent(expectedFileName);
  });
});
