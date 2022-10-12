class ShoppingCart{
    private proceedBtn: string;
    private secondCheckout: string;
    constructor(){
        this.proceedBtn = ".button-container > .button-medium > span"
        this.secondCheckout = ".cart_navigation > .button > span"
    }

    public clickProceedBtn(): void{
        cy.get(this.proceedBtn).click()
    }
    public clickSecondCheckout(): void{
        cy.get(this.secondCheckout).click();
    }
}

export {ShoppingCart}
