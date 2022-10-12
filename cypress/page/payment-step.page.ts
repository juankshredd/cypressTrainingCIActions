class PaymentStepPage{
    private wireBankBtn: string;
    private confirmOrderBtn: string;
    private paragraphContainer: string;

    constructor(){
        this.wireBankBtn = ".bankwire";
        this.confirmOrderBtn = "#cart_navigation > .button > span";
        this.paragraphContainer = "#center_column > div > p > strong";
    }

    public clickPayment(): void{
        cy.get(this.wireBankBtn).click();
    }
    
    public clickConfirmOrderBtn(): void{
        cy.get(this.confirmOrderBtn).click();
    }

    public getParagraph(){
        return cy.get(this.paragraphContainer);
    }
}

export {PaymentStepPage}
