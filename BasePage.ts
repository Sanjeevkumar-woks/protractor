import{protractor,element,by,browser} from 'protractor';
import{alert} from "../utilities/BankUtility"


export class BasePage{
    openAccTab=element(by.buttonText("Open Account"));
    openCustomerTab=element(by.buttonText("Customers"));
    deposit=element(by.buttonText("Deposit")); 
    withdraw=element(by.buttonText("Withdrawl"));
    transactions=element(by.buttonText("Transactions"))

    

    ClickOnOpenAccTab(){
        this.openAccTab.click();
    }

    ClickOnCustomerTab(){
        this.openCustomerTab.click();

    } 
    ClickOnDepositTab(){
        this.deposit.click();
    }
    ClickOnWithdrawlTab(){
        this.withdraw.click();
    }
    ClickOntransactionsTab(){
        this.transactions.click();
    }

}