"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAccPage = void 0;
var protractor_1 = require("protractor");
var BankUtility_1 = require("../utilities/BankUtility");
var OpenAccPage = /** @class */ (function () {
    function OpenAccPage() {
        this.Customers = protractor_1.element(protractor_1.by.model('custId'));
        this.options = this.Customers.all(protractor_1.by.tagName('option'));
        this.Currency = protractor_1.element(protractor_1.by.model("currency"));
        this.Process = protractor_1.element(protractor_1.by.buttonText("Process"));
    }
    OpenAccPage.prototype.SelectCustomer = function () {
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
        });
    };
    OpenAccPage.prototype.SelectCurrency = function () {
        this.Currency.$('[value="Rupee"]').click();
    };
    OpenAccPage.prototype.ClickProcessBtn = function () {
        this.Process.click();
        protractor_1.browser.sleep(2000);
        BankUtility_1.alert.VerifyAndCloseAlert("Account created successfully");
    };
    return OpenAccPage;
}());
exports.OpenAccPage = OpenAccPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3BlbkFjY1BhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlcy9PcGVuQWNjUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBd0Q7QUFDeEQsd0RBQTZDO0FBRTdDO0lBQUE7UUFDSSxjQUFTLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDdEMsWUFBTyxHQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNqRCxhQUFRLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDdkMsWUFBTyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBd0I5QyxDQUFDO0lBdEJHLG9DQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFTLEtBQUs7b0NBQ3BCLENBQUM7Z0JBQ0osS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLEdBQUc7b0JBQ2hDLElBQUcsR0FBRyxJQUFJLG1CQUFtQixFQUFDO3dCQUMxQixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7cUJBQ3BCO2dCQUNMLENBQUMsQ0FBQyxDQUFBOztZQUxQLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxLQUFLLENBQUMsTUFBTSxFQUFHLENBQUMsRUFBRTt3QkFBekIsQ0FBQzthQU9SO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDUCxDQUFDO0lBRUQsb0NBQWMsR0FBZDtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVELHFDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JCLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLG1CQUFLLENBQUUsbUJBQW1CLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBNUJELElBNEJDO0FBNUJZLGtDQUFXIn0=