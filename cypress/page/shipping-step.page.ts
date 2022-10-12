class ShippingStepPage{
    private shippingCheckout: string;
    private agreement: string;

    constructor(){
        this.shippingCheckout = ".cart_navigation > .button > span",
        this.agreement ="#cgv"
    }
    public clickAgreement(): void{
        cy.get(this.agreement).click();
    }

    public clickShippingCheckout(): void{
        cy.get(this.shippingCheckout).click();
    }
}

export {ShippingStepPage}
