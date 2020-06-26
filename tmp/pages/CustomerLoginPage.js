"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerLoginPage = void 0;
var protractor_1 = require("protractor");
var CustomerLoginPage = /** @class */ (function () {
    function CustomerLoginPage() {
        this.Customers = protractor_1.element(protractor_1.by.model('custId'));
        this.options = this.Customers.all(protractor_1.by.tagName('option'));
        this.login = protractor_1.element(protractor_1.by.buttonText("Login"));
        this.amount = protractor_1.element(protractor_1.by.model("amount"));
        this.depositbtn = protractor_1.element(protractor_1.by.className("btn btn-default"));
        this.withdrawamount = protractor_1.element(protractor_1.by.model("amount"));
        this.withdrawbtn = protractor_1.element(protractor_1.by.className("btn btn-default"));
        this.logout = protractor_1.element(protractor_1.by.buttonText("Logout"));
    }
    CustomerLoginPage.prototype.SelectCustomer = function () {
        this.options.then(function (items) {
            var _loop_1 = function (i) {
                items[i].getText().then(function (txt) {
                    if (txt == "Sanjeev Managutti") {
                        items[i].click();
                    }
                });
            };
            for (var i = 0; i < items.length; i++) {
                _loop_1(i);
            }
            protractor_1.browser.sleep(2000);
            //element(by.buttonText("Login")).click();   
        });
        this.login.click();
        protractor_1.browser.sleep(2000);
    };
    CustomerLoginPage.prototype.Deposit = function () {
        this.amount.sendKeys("10000");
        this.depositbtn.click();
        protractor_1.browser.sleep(2000);
        protractor_1.element(protractor_1.by.className("error ng-binding")).getText().then(function (text) { console.log(text); });
    };
    CustomerLoginPage.prototype.Withdraw = function () {
        this.withdrawamount.sendKeys("5000");
        this.withdrawbtn.click();
        protractor_1.browser.sleep(2000);
        protractor_1.element(protractor_1.by.className("error ng-binding")).getText().then(function (text) { console.log(text); });
    };
    CustomerLoginPage.prototype.Logout = function () {
        this.logout.click();
        protractor_1.browser.sleep(5000);
    };
    return CustomerLoginPage;
}());
exports.CustomerLoginPage = CustomerLoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJMb2dpblBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlcy9DdXN0b21lckxvZ2luUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBd0Q7QUFHeEQ7SUFBQTtRQUNLLGNBQVMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUN0QyxZQUFPLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2pELFVBQUssR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUN0QyxXQUFNLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDbkMsZUFBVSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7UUFDcEQsbUJBQWMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUMzQyxnQkFBVyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7UUFDckQsV0FBTSxHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBdUM5QyxDQUFDO0lBckNHLDBDQUFjLEdBQWQ7UUFDRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFTLEtBQUs7b0NBQ2pCLENBQUM7Z0JBQ0osS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLEdBQUc7b0JBQ2hDLElBQUcsR0FBRyxJQUFJLG1CQUFtQixFQUFDO3dCQUMxQixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7cUJBQ3BCO2dCQUNMLENBQUMsQ0FBQyxDQUFBOztZQUxQLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxLQUFLLENBQUMsTUFBTSxFQUFHLENBQUMsRUFBRTt3QkFBekIsQ0FBQzthQU9SO1lBQ0Qsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEIsNkNBQTZDO1FBQ2xELENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0QsbUNBQU8sR0FBUDtRQUVJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDeEIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsb0JBQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJLElBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFBLENBQUMsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBRUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN6QixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUksSUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUEsQ0FBQyxDQUFDLENBQUM7SUFDaEcsQ0FBQztJQUNELGtDQUFNLEdBQU47UUFFSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BCLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFTCx3QkFBQztBQUFELENBQUMsQUEvQ0QsSUErQ0M7QUEvQ1ksOENBQWlCIn0=