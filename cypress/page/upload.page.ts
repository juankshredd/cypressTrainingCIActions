class Upload{
    private testUrl: string;
    private fileContainer: string;
    private submitBtn: string;
    private messageCont: string;
    
    constructor(){
        this.testUrl = "https://the-internet.herokuapp.com/upload";
        this.fileContainer = "#file-upload";
        this.submitBtn = "#file-submit";
        this.messageCont = "#uploaded-files";  
    };

    public visitTestPage(){
        cy.visit(this.testUrl);
    };

    public uploadFile(targetFile: string): void{
        cy.get(this.fileContainer).attachFile(targetFile);
        cy.get(this.submitBtn).click({force:true})
    };

    public getTitle(){
        return cy.get(this.messageCont);
    };
};
                                                                                                                              
export {Upload}
