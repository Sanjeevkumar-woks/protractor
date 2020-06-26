import{protractor,element,by,browser,} from 'protractor';
import{ AddCustomerPage} from "../pages/AddCustomerPage"
import { BasePage } from "../pages/BasePage";
import { OpenAccPage } from "../pages/OpenAccPage";
import { CustomerPage } from "../pages/CustomerPage";
import{ CustomerLoginPage} from "../pages/CustomerLoginPage"

describe('Bank Application', function() {
   
    beforeEach(function(){
        browser.get("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login");  
    })

it("Manager LOGIN",function(){
    let addcustomerpage = new AddCustomerPage();
    let basepage=new BasePage();
    let openaccpage= new OpenAccPage();
    let customerpage=new CustomerPage();
    element(by.buttonText("Bank Manager Login")).click();
    browser.sleep(5000);
    addcustomerpage.AddCustomer();
    browser.sleep(2000);
    basepage.ClickOnOpenAccTab();
    openaccpage.SelectCustomer();
    openaccpage.SelectCurrency();
    openaccpage.ClickProcessBtn();
    browser.sleep(2000);

    basepage.ClickOnCustomerTab();
    customerpage.VerifyCusEntry();
    browser.sleep(2000);
    customerpage.VerifyCusEntryAndDelet();

});

it("Customer LOGIN",function(){
    element(by.buttonText("Customer Login")).click();
    browser.sleep(5000);

    let customerloginpage = new CustomerLoginPage();
    let basepage=new BasePage();
    customerloginpage.SelectCustomer();
    basepage.ClickOnDepositTab();
    customerloginpage.Deposit();
    basepage.ClickOnWithdrawlTab();
    customerloginpage.Withdraw();
    basepage.ClickOntransactionsTab();
    customerloginpage.Logout();
});

});

