import 'cypress-iframe';

class IframePage{
  private testUrl: string;
  private iFrameXpath: string;
  private cssObject: string;
  private titleContainer: string;
  private iFrameUrl: string;

  constructor(){
      this.testUrl = "https://www.w3schools.com/html/html_iframe.asp"
      this.iFrameXpath = "iframe[title='W3Schools HTML Tutorial']";
      this.cssObject = "a[title='CSS Tutorial']";
      this.titleContainer = "#main > h1";
      this.iFrameUrl = "https://www.w3schools.com/css/";
  }
  public visit(){
      cy.visit(this.testUrl);
    }
    
  public getFrameTitle(): Cypress.Chainable <string>{
      return cy.iframe(this.iFrameXpath).find(this.titleContainer).invoke('text');
    }
    
  public goToCssPageInFrame(){
      cy.iframe(this.iFrameXpath).find(this.cssObject).click();
      this.frameLanded();
    }

  public frameLanded(){
    cy.frameLoaded(this.iFrameXpath, {url:this.iFrameUrl});
  }
}

export {IframePage}
