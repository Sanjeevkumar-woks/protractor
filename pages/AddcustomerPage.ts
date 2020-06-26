import{protractor,element,by,browser} from 'protractor';
import{alert} from "../utilities/BankUtility"

export class AddCustomerPage{
     selectAddCustomer=element(by.className("btn btn-lg tab"));
     fname= element(by.model("fName"));
     lname= element(by.model("lName"));
     postcode= element(by.model("postCd"));
     addcustomerbtn=element(by.className("btn btn-default"));

     AddCustomer(){
        this.selectAddCustomer.click();
         this.fname.sendKeys("Sanjeev");
         this.lname.sendKeys("Managutti");
         this.postcode.sendKeys("590016");
         this.addcustomerbtn.click();
         browser.sleep(2000);
         alert.VerifyAndCloseAlert("Customer added successfully");   
         
     }


}
