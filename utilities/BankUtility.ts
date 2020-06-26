import{protractor,element,by,browser,} from 'protractor';


export class alert{

static VerifyAndCloseAlert(text){
    let Ec=protractor.ExpectedConditions;
    browser.wait(Ec.alertIsPresent(),4000,"Alert not Found !");
    
    let alert=browser.switchTo().alert();
    let alertText=alert.getText();
    
    expect(alertText).toContain(text);
    alert.accept();
}
}