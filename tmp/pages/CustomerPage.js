"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerPage = void 0;
var protractor_1 = require("protractor");
var CustomerPage = /** @class */ (function () {
    function CustomerPage() {
        this.rows = protractor_1.element.all(protractor_1.by.repeater('cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer'));
    }
    CustomerPage.prototype.VerifyCusEntry = function () {
        this.rows.each(function (row) {
            var cells = row.$$('td');
            cells.get(0).getText().then(function (txt) {
                if (txt == 'Sanjeev') {
                    console.log("CUSTOMER VARIFIED !!");
                }
            });
        });
    };
    CustomerPage.prototype.VerifyCusEntryAndDelet = function () {
        this.rows.each(function (row) {
            var cells = row.$$('td');
            cells.get(0).getText().then(function (txt) {
                if (txt == 'Sanjeev') {
                    cells.get(4).$('button').click();
                }
            });
        });
    };
    return CustomerPage;
}());
exports.CustomerPage = CustomerPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZXMvQ3VzdG9tZXJQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUF3RDtBQUN4RDtJQUFBO1FBQ0ksU0FBSSxHQUFFLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsMEVBQTBFLENBQUMsQ0FBQyxDQUFDO0lBd0IvRyxDQUFDO0lBdEJHLHFDQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFTLEdBQUc7WUFDbkIsSUFBSSxLQUFLLEdBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLEdBQUc7Z0JBQ3BDLElBQUcsR0FBRyxJQUFJLFNBQVMsRUFBQztvQkFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO2lCQUN0QztZQUNMLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUwsNkNBQXNCLEdBQXRCO1FBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBUyxHQUFHO1lBQ25CLElBQUksS0FBSyxHQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxHQUFHO2dCQUNwQyxJQUFHLEdBQUcsSUFBSSxTQUFTLEVBQUM7b0JBQ2hCLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUNwQztZQUNMLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUwsbUJBQUM7QUFBRCxDQUFDLEFBekJELElBeUJDO0FBekJZLG9DQUFZIn0=