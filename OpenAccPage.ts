import{protractor,element,by,browser} from 'protractor';
import{alert} from "../utilities/BankUtility"

export class OpenAccPage{
    Customers=element(by.model('custId'));
    options=this.Customers.all(by.tagName('option'));
    Currency=element(by.model("currency"));
    Process=element(by.buttonText("Process"));

    SelectCustomer(){
        this.options.then(function(items){
            for(let i=0; i<items.length;  i++){
                 items[i].getText().then(function(txt){
                     if(txt == "Sanjeev Managutti"){
                         items[i].click();
                     }
                 })

            }  
         })
    }

    SelectCurrency(){
        this.Currency.$('[value="Rupee"]').click();
    }

    ClickProcessBtn(){
        this.Process.click();
        browser.sleep(2000);
        alert. VerifyAndCloseAlert("Account created successfully");
    }
}
