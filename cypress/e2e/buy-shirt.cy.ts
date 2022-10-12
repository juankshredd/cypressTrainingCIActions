import {AddressStepPage, MenuContentPage, ProducsList,
  ShippingStepPage, ShoppingCart, PaymentStepPage, LoginPage} from "../page/index";


describe("Buy a t-shirt", () => {
  let menuContentPage: MenuContentPage;
  let addressStepPage: AddressStepPage;
  let productsListPage: ProducsList;
  let shoppingCartPage: ShoppingCart;
  let loginPage: LoginPage;
  let shippingStepPage: ShippingStepPage;
  let paymentStepPage: PaymentStepPage;

  const email = "aperdomobo@gmail.com";
  const psw = "WorkshopProtractor";
  const expectedMessage = "Your order on My Store is complete.";

  before(()=>{
    menuContentPage = new MenuContentPage();
    productsListPage = new ProducsList();
    shoppingCartPage = new ShoppingCart();
    loginPage = new LoginPage();
    addressStepPage = new AddressStepPage();
    shippingStepPage = new ShippingStepPage();
    paymentStepPage = new PaymentStepPage();
  });

  it("then should be bought a t-shirt", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    productsListPage.clickAddToCartBtn("Faded Short Sleeve T-shirts");
    shoppingCartPage.clickProceedBtn();
    shoppingCartPage.clickSecondCheckout();
    loginPage.login(email, psw);
    loginPage.clickSubmitBtn();

    addressStepPage.clickAddressCheck();
    shippingStepPage.clickAgreement();
    shippingStepPage.clickShippingCheckout();
    paymentStepPage.clickPayment();
    paymentStepPage.clickConfirmOrderBtn();
    paymentStepPage.getParagraph().should("have.text", expectedMessage);
  });
});
