class ProducsList{
    private addToCartBtn: string;
    private allProductsSelector: string;

    constructor(){
        this.addToCartBtn = ".ajax_add_to_cart_button > span";
        this.allProductsSelector = ".product_list"
    }

    public clickAddToCartBtn(targetName: string): void {
        this.findProductByName(targetName).find('a > span')
        cy.get(this.addToCartBtn).click();
    }

    private findProductByName(targetProduct: string){
        return cy.get(this.allProductsSelector).filter(`:contains(${targetProduct})`);
    }
}

export {ProducsList}
