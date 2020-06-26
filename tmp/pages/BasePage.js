"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePage = void 0;
var protractor_1 = require("protractor");
var BasePage = /** @class */ (function () {
    function BasePage() {
        this.openAccTab = protractor_1.element(protractor_1.by.buttonText("Open Account"));
        this.openCustomerTab = protractor_1.element(protractor_1.by.buttonText("Customers"));
        this.deposit = protractor_1.element(protractor_1.by.buttonText("Deposit"));
        this.withdraw = protractor_1.element(protractor_1.by.buttonText("Withdrawl"));
        this.transactions = protractor_1.element(protractor_1.by.buttonText("Transactions"));
    }
    BasePage.prototype.ClickOnOpenAccTab = function () {
        this.openAccTab.click();
    };
    BasePage.prototype.ClickOnCustomerTab = function () {
        this.openCustomerTab.click();
    };
    BasePage.prototype.ClickOnDepositTab = function () {
        this.deposit.click();
    };
    BasePage.prototype.ClickOnWithdrawlTab = function () {
        this.withdraw.click();
    };
    BasePage.prototype.ClickOntransactionsTab = function () {
        this.transactions.click();
    };
    return BasePage;
}());
exports.BasePage = BasePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlcy9CYXNlUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBd0Q7QUFJeEQ7SUFBQTtRQUNJLGVBQVUsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUNsRCxvQkFBZSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3BELFlBQU8sR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUMxQyxhQUFRLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDN0MsaUJBQVksR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQTtJQXNCdkQsQ0FBQztJQWxCRyxvQ0FBaUIsR0FBakI7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxxQ0FBa0IsR0FBbEI7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRWpDLENBQUM7SUFDRCxvQ0FBaUIsR0FBakI7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxzQ0FBbUIsR0FBbkI7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDRCx5Q0FBc0IsR0FBdEI7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTCxlQUFDO0FBQUQsQ0FBQyxBQTNCRCxJQTJCQztBQTNCWSw0QkFBUSJ9