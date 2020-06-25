import{protractor,element,by,browser} from 'protractor';
import{alert} from "../utilities/BankUtility"

export class CustomerLoginPage{
     Customers=element(by.model('custId'));
     options=this.Customers.all(by.tagName('option'));
     login=element(by.buttonText("Login"));
     amount=element(by.model("amount"));
     depositbtn=element(by.className("btn btn-default"));
     withdrawamount=element(by.model("amount"));
     withdrawbtn=element(by.className("btn btn-default"));
     logout= element(by.buttonText("Logout"));

    SelectCustomer(){
       this.options.then(function(items){
              for(let i=0; i<items.length;  i++){
                   items[i].getText().then(function(txt){
                       if(txt == "Sanjeev Managutti"){
                           items[i].click();
                       }
                   })
    
              } 
              browser.sleep(2000);
              //element(by.buttonText("Login")).click();   
         })
         this.login.click();
         browser.sleep(2000);
    }
    Deposit(){
    
        this.amount.sendKeys("10000"); 
        this.depositbtn.click();
        browser.sleep(2000);
        element(by.className("error ng-binding")).getText().then(function(text){console.log(text)});
    }

    Withdraw(){
       
        this.withdrawamount.sendKeys("5000");
        this.withdrawbtn.click();
        browser.sleep(2000);
        element(by.className("error ng-binding")).getText().then(function(text){console.log(text)});    
    }
    Logout(){

        this.logout.click();
        browser.sleep(5000);
    }
   
}
