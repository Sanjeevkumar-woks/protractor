"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alert = void 0;
var protractor_1 = require("protractor");
var alert = /** @class */ (function () {
    function alert() {
    }
    alert.VerifyAndCloseAlert = function (text) {
        var Ec = protractor_1.protractor.ExpectedConditions;
        protractor_1.browser.wait(Ec.alertIsPresent(), 4000, "Alert not Found !");
        var alert = protractor_1.browser.switchTo().alert();
        var alertText = alert.getText();
        expect(alertText).toContain(text);
        alert.accept();
    };
    return alert;
}());
exports.alert = alert;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFua1V0aWxpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi91dGlsaXRpZXMvQmFua1V0aWxpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBQXlEO0FBR3pEO0lBQUE7SUFZQSxDQUFDO0lBVk0seUJBQW1CLEdBQTFCLFVBQTJCLElBQUk7UUFDM0IsSUFBSSxFQUFFLEdBQUMsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztRQUNyQyxvQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLEVBQUMsSUFBSSxFQUFDLG1CQUFtQixDQUFDLENBQUM7UUFFM0QsSUFBSSxLQUFLLEdBQUMsb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQyxJQUFJLFNBQVMsR0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFOUIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUNELFlBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQztBQVpZLHNCQUFLIn0=