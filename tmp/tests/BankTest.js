"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var AddCustomerPage_1 = require("../pages/AddCustomerPage");
var BasePage_1 = require("../pages/BasePage");
var OpenAccPage_1 = require("../pages/OpenAccPage");
var CustomerPage_1 = require("../pages/CustomerPage");
var CustomerLoginPage_1 = require("../pages/CustomerLoginPage");
describe('Bank Application', function () {
    beforeEach(function () {
        protractor_1.browser.get("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login");
    });
    it("Manager LOGIN", function () {
        var addcustomerpage = new AddCustomerPage_1.AddCustomerPage();
        var basepage = new BasePage_1.BasePage();
        var openaccpage = new OpenAccPage_1.OpenAccPage();
        var customerpage = new CustomerPage_1.CustomerPage();
        protractor_1.element(protractor_1.by.buttonText("Bank Manager Login")).click();
        protractor_1.browser.sleep(5000);
        addcustomerpage.AddCustomer();
        protractor_1.browser.sleep(2000);
        basepage.ClickOnOpenAccTab();
        openaccpage.SelectCustomer();
        openaccpage.SelectCurrency();
        openaccpage.ClickProcessBtn();
        protractor_1.browser.sleep(2000);
        basepage.ClickOnCustomerTab();
        customerpage.VerifyCusEntry();
        protractor_1.browser.sleep(2000);
        //customerpage.VerifyCusEntryAndDelet();
    });
    it("Customer LOGIN", function () {
        protractor_1.element(protractor_1.by.buttonText("Customer Login")).click();
        protractor_1.browser.sleep(5000);
        var customerloginpage = new CustomerLoginPage_1.CustomerLoginPage();
        var basepage = new BasePage_1.BasePage();
        customerloginpage.SelectCustomer();
        basepage.ClickOnDepositTab();
        customerloginpage.Deposit();
        basepage.ClickOnWithdrawlTab();
        customerloginpage.Withdraw();
        basepage.ClickOntransactionsTab();
        customerloginpage.Logout();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFua1Rlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90ZXN0cy9CYW5rVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUF5RDtBQUN6RCw0REFBd0Q7QUFDeEQsOENBQTZDO0FBQzdDLG9EQUFtRDtBQUNuRCxzREFBcUQ7QUFDckQsZ0VBQTREO0FBRTVELFFBQVEsQ0FBQyxrQkFBa0IsRUFBRTtJQUV6QixVQUFVLENBQUM7UUFDUCxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx1RUFBdUUsQ0FBQyxDQUFDO0lBQ3pGLENBQUMsQ0FBQyxDQUFBO0lBRU4sRUFBRSxDQUFDLGVBQWUsRUFBQztRQUNmLElBQUksZUFBZSxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO1FBQzVDLElBQUksUUFBUSxHQUFDLElBQUksbUJBQVEsRUFBRSxDQUFDO1FBQzVCLElBQUksV0FBVyxHQUFFLElBQUkseUJBQVcsRUFBRSxDQUFDO1FBQ25DLElBQUksWUFBWSxHQUFDLElBQUksMkJBQVksRUFBRSxDQUFDO1FBQ3BDLG9CQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckQsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzlCLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzdCLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUM3QixXQUFXLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDN0IsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzlCLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXBCLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzlCLFlBQVksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUM5QixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixZQUFZLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUUxQyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxnQkFBZ0IsRUFBQztRQUNoQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pELG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXBCLElBQUksaUJBQWlCLEdBQUcsSUFBSSxxQ0FBaUIsRUFBRSxDQUFDO1FBQ2hELElBQUksUUFBUSxHQUFDLElBQUksbUJBQVEsRUFBRSxDQUFDO1FBQzVCLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25DLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzdCLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzVCLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQy9CLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzdCLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQ2xDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQy9CLENBQUMsQ0FBQyxDQUFDO0FBRUgsQ0FBQyxDQUFDLENBQUMifQ==