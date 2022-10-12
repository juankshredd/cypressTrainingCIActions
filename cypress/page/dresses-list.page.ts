class DressesListPage {

    private dressItem: string;
    private dressName: string;
  
    constructor(){
      this.dressItem = ".product-container"
      this.dressName = `${this.dressItem} .product-name`
    }
  
    getDressProducts(){
      return cy.get(this.dressItem)
    }
  
    validateItemsNumber(itemsNumber: number){
      cy.get(this.dressItem).should("have.length", itemsNumber)
    }
  
    validateItemsNames(names: string[]){
      cy.get(this.dressName).each((item, index) => {
        expect(item.text().trim()).to.contain(names[index])
      })
    }
  
  }
  
  export {DressesListPage}
