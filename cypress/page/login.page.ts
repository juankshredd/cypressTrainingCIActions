class LoginPage{
    private submitBtn: string;
    private emailSelector: string;
    private pswSelector:string;

    constructor(){
        this.submitBtn = "#SubmitLogin > span";
        this.emailSelector = "#email";
        this.pswSelector = "#passwd";
    }

    public login(email:string, psw:string): void{
        cy.get(this.emailSelector).type(email);
        cy.get(this.pswSelector).type(psw);
    }

    public clickSubmitBtn(): void{
        cy.get(this.submitBtn).click();
    }
}

export {LoginPage}
