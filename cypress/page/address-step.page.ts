class AddressStepPage{
    private addressCheckout: string;

    constructor() {
        this.addressCheckout = ".cart_navigation > .button > span";
    }

    public clickAddressCheck(): void {
        cy.get(this.addressCheckout).click()
    }
}

export {AddressStepPage}
