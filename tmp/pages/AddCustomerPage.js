"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCustomerPage = void 0;
var protractor_1 = require("protractor");
var BankUtility_1 = require("../utilities/BankUtility");
var AddCustomerPage = /** @class */ (function () {
    function AddCustomerPage() {
        this.selectAddCustomer = protractor_1.element(protractor_1.by.className("btn btn-lg tab"));
        this.fname = protractor_1.element(protractor_1.by.model("fName"));
        this.lname = protractor_1.element(protractor_1.by.model("lName"));
        this.postcode = protractor_1.element(protractor_1.by.model("postCd"));
        this.addcustomerbtn = protractor_1.element(protractor_1.by.className("btn btn-default"));
    }
    AddCustomerPage.prototype.AddCustomer = function () {
        this.selectAddCustomer.click();
        this.fname.sendKeys("Sanjeev");
        this.lname.sendKeys("Managutti");
        this.postcode.sendKeys("590016");
        this.addcustomerbtn.click();
        protractor_1.browser.sleep(2000);
        BankUtility_1.alert.VerifyAndCloseAlert("Customer added successfully");
    };
    return AddCustomerPage;
}());
exports.AddCustomerPage = AddCustomerPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkQ3VzdG9tZXJQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZXMvQWRkQ3VzdG9tZXJQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUF3RDtBQUN4RCx3REFBNkM7QUFFN0M7SUFBQTtRQUNLLHNCQUFpQixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFDMUQsVUFBSyxHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLFVBQUssR0FBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNsQyxhQUFRLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDdEMsbUJBQWMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0lBYzdELENBQUM7SUFaSSxxQ0FBVyxHQUFYO1FBQ0csSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDNUIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsbUJBQUssQ0FBQyxtQkFBbUIsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0lBRTdELENBQUM7SUFHTixzQkFBQztBQUFELENBQUMsQUFuQkQsSUFtQkM7QUFuQlksMENBQWUifQ==