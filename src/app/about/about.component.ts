import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import {MyDatePickerModule} from 'mydatepicker';
import {IMyDpOptions} from 'mydatepicker';
@Component({
  selector: 'about',
 
  templateUrl: './about.component.html',
  styles:[`
  * {
  box-sizing: border-box;
}

/* Create two equal columns that floats next to each other */
.column {
  float: left;
  width: 50%;
  padding: 10px;
  height: 500px; /* Should be removed. Only for demonstration */
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}


#customers {
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

#customers td, #customers th {
    border: 1px solid #ddd;
    padding: 8px;
}

#customers tr:nth-child(even){background-color: #00838F;}

#customers tr:hover {background-color: #00838F;}

#customers th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #00838F;
    color: white;
}

.checkmark__circle {
    stroke-dasharray: 166;
    stroke-dashoffset: 166;
    stroke-width: 2;
    stroke-miterlimit: 10;
    stroke: #7ac142;
    fill: none;
    animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
  }
  
  .checkmark {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    display: block;
    stroke-width: 2;
    stroke: #fff;
    stroke-miterlimit: 10;
    margin: 10% auto;
    box-shadow: inset 0px 0px 0px #7ac142;
    animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
  }
  
  .checkmark__check {
    transform-origin: 50% 50%;
    stroke-dasharray: 48;
    stroke-dashoffset: 48;
    animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
  }
  
  @keyframes stroke {
    100% {
      stroke-dashoffset: 0;
    }
  }
  @keyframes scale {
    0%, 100% {
      transform: none;
    }
    50% {
      transform: scale3d(1.1, 1.1, 1);
    }
  }
  @keyframes fill {
    100% {
      box-shadow: inset 0px 0px 0px 30px #7ac142;
    }
  }

  .button {
    background-color: #00838F; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 4px 2px;
    cursor: pointer;
}

.button1 {font-size: 10px;}
.button2 {font-size: 12px;}
.button3 {font-size: 16px;}
.button4 {font-size: 20px;}
.button5 {font-size: 24px;}


`]
  // template: `
  // <h2></h2>
  // `
})
export class AboutComponent implements OnInit {

  public localState: any;
  constructor(
    public route: ActivatedRoute
  ) {}

  public ngOnInit() {
    this.route
      .data
      .subscribe((data: any) => {
        /**
         * Your resolved data from route.
         */
        this.localState = data.yourData;
      });

    console.log('hello `About` component');
    /**
     * static data that is bundled
     * var mockData = require('assets/mock-data/mock-data.json');
     * console.log('mockData', mockData);
     * if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
     */
    this.asyncDataWithWebpack();
  }
  private history :any[]=[];
  private receipts:any=''
    private auth:number=0;
    private passcode:number;
    private passcode_string:string;
    private payment=""
    private fromDate={}
    private toDate={}
    private sum :number=150

    public myDatePickerOptions: IMyDpOptions = {
      // other options...
      dateFormat: 'dd.mm.yyyy',
  };

  // Initialized to specific date (09.10.2018).
  public model: any = { date: { year: 2018, month: 10, day: 9 } };

  receipt() {
    // if (this.paymentMessageStatus == true) {
        this.passcode= Math.floor(100000 + Math.random() * 900000)
        
        if (this.payment == "Paytm" || this.payment == "UPI") {
            console.log("hereiam12",(this.fromDate))
            
            this.history.push({ "time": Date.now(), "start": '03.06.2018', "end": "23.06.2018", "fare": this.sum * this.passenger_number, "transaction": this.payment, "status": 'successful','passcode':this.passcode })
            this.receipts = "Pass"
        }
        else if(this.payment == "Cash"){
            let verfy=this.Auth(this.auth)
            console.log("hereiam",verfy,true)
            if (verfy==true){
                this.history.push({ "time": Date.now(), "start": '03.06.2018', "end": "23.06.2018","fare": this.sum * this.passenger_number, "transaction": this.payment, "status": 'successful','passcode':this.passcode })
                this.receipts = "Pass"
            }
            else{
                this.history.push({ "time": Date.now(), "start": '03.06.2018', "end": "23.06.2018","fare": this.sum * this.passenger_number, "transaction": this.payment, "status": 'fail' ,'passcode': this.passcode})
                this.receipts = "Fail"
            }
        }

   

}
private passenger_list=[1,2,3,4,6,12]
private passenger_number=1;
Auth(auth:number){
    let verify=333
    let val=false
    if (this.auth==verify)
    {
        val= true;
    }
    else if (this.auth!=verify)
    {
        val= false;
    }
    console.log('val is ',val)
return val
}

  private asyncDataWithWebpack() {
    /**
     * you can also async load mock data with 'es6-promise-loader'
     * you would do this if you don't want the mock-data bundled
     * remember that 'es6-promise-loader' is a promise
     */
    setTimeout(() => {

      System.import('../../assets/mock-data/mock-data.json')
        .then((json) => {
          console.log('async mockData', json);
          this.localState = json;
        });

    });
  }

}
