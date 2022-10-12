class DownloadPage{
    private testUrl: string;
    private downloadBtn: string;
    private fileAddress: string;

    constructor(){
        this.testUrl = "https://demoqa.com/upload-download";
        this.downloadBtn = "#downloadButton";
        this.fileAddress = "./cypress/downloads/"; 
    }

    public visitPage(){
        cy.visit(this.testUrl);
    }

    public downloadFile(){
        cy.get(this.downloadBtn).click({force:true});
    }

    public verifyDownloadFileContent(fileName: string){
        cy.readFile(this.fileAddress + fileName).should("exist");
    }
}

export {DownloadPage}
