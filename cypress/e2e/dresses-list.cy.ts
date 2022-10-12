import {MenuContentPage, DressesListPage} from "../page/index";


describe("the user navigates to the dresses page", () => {
  let menuContentPage: MenuContentPage;
  let dressesListPage: DressesListPage;
  const names: string[] = [
    "Printed Dress",
    "Printed Dress",
    "Printed Summer Dress",
    "Printed Summer Dress",
    "Printed Chiffon Dress",

  ];

  before(() => {
    menuContentPage = new MenuContentPage();
    dressesListPage = new DressesListPage();
  });

  it("show the available dresses", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToDressesMenu();
    dressesListPage.validateItemsNumber(5);
    dressesListPage.validateItemsNames(names);
  });
});
