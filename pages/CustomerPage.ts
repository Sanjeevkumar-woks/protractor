import{protractor,element,by,browser} from 'protractor';
export class CustomerPage{
    rows =element.all(by.repeater('cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer'));
  
    VerifyCusEntry(){
        this.rows.each(function(row){
                let cells=row.$$('td');
                cells.get(0).getText().then(function(txt){
                    if(txt == 'Sanjeev'){
                        console.log("CUSTOMER VARIFIED !!")
                    }
                })
            })
        }

    VerifyCusEntryAndDelet(){   
    this.rows.each(function(row){
            let cells=row.$$('td');
            cells.get(0).getText().then(function(txt){
                if(txt == 'Sanjeev'){
                    cells.get(4).$('button').click();
                }
            })
        })
    }

}
   