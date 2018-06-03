// import {
//   Component,
//   OnInit
// } from '@angular/core';
import {Component, ViewChild, ViewEncapsulation, OnInit} from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';
import { XLargeDirective } from './x-large';
import {QrScannerComponent} from 'angular2-qrscanner';
import {DetailComponent} from '../+detail/detail.component'
@Component({
  
  /**
   * The selector is what angular internally uses
   * for `document.querySelectorAll(selector)` in our index.html
   * where, in this case, selector is the string 'home'.
   */
  selector: 'home',  // <home></home>
  /**
   * We need to tell Angular's Dependency Injection which providers are in our app.
   */
  providers: [
    Title
  ],
  /**
   * Our list of styles in our component. We may add more to compose many styles together.
   */
  styleUrls: [ './home.component.css' ],
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  templateUrl: './home.component.html',
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
})
export class HomeComponent implements OnInit {
  

  private pickuppoint:any;

  private Destination:any;
  private bus_ids:Object;
  private stops_ids:Object;
  @ViewChild(QrScannerComponent) qrScannerComponent: QrScannerComponent ;
  private selectedValue:any=''

  
  ngOnInit() {
    this.postDummyPayMent()
    this.bus_ids=[{
   
     "name":"500D",
     "start":"Central Silk Board",
     "end":"Hebbal",
     "distance":"31KM",
     "number": 790,
     "totalstops": 37
  },
  {
      
     "name":"500C",
     "start":"Central Silk Board",
     "end":"Mahadevpura",
     "distance":"27KM",
     "number": 789,
     "totalstops": 29,
     "frequency": "5 mins"
  }]


  this.stops_ids=[{
    
   "number": 1,
   "name":"Central Silk Board",
   "bus_id_number": 789,
   "bus_stop_number":123,
   "fare":5
},
{
    
   "number": 2,
   "name":"Hsr Layout Si Apartment",
   "bus_id_number": 789,
   "bus_stop_number":124,
   "fare":2
},
{
    
   "number": 3,
   "name":"Hsr Layout Bda Complex",
   "bus_id_number": 789,
   "bus_stop_number":125,
   "fare":2
},
{
    
   "number": 4,
   "name":"K R Puram",
   "bus_id_number": 789,
   "bus_stop_number":126,
   "fare":2
},
{
    
   "number": 5,
   "name":"Iti Colony (K R Puram)",
   "bus_id_number": 789,
   "bus_stop_number":127,
   "fare":2
},
{
    
   "number": 6,
   "name":"Duravani Nagar",
   "bus_id_number": 789,
   "bus_stop_number":128,
   "fare":2
},
{
    
   "number": 7,
   "name":"Ramamurthynagar",
   "bus_id_number": 789,
   "bus_stop_number":129,
   "fare":5
},
{
   
   "number":8,
   "name":"Ramamurthynagar Police Station",
   "bus_id_number": 789,
   "bus_stop_number":130,
   "fare":2
},
{
   
   "number": 9,
   "name":"Ramamurthynagar Underpass",
   "bus_id_number": 789,
   "bus_stop_number":131,
   "fare":2
},
{
    
   "number": 10,
   "name":"B Channasandra",
   "bus_id_number": 789,
   "bus_stop_number":132,
   "fare":2
},
{
    
   "number":11,
   "name":"Kasturinagar Cross",
   "bus_id_number": 789,
   "bus_stop_number":133,
   "fare":2
},
{
   
   "number": 12,
   "name":"Tin Factory",
   "bus_id_number": 789,
   "bus_stop_number":134,
   "fare":5
},
{
   
   "number": 13,
   "name":"K R Puram Railway Station",
   "bus_id_number": 789,
   "bus_stop_number":135,
   "fare":2
},
{
    
   "number": 14,
   "name":"B Narayanapura",
   "bus_id_number": 789,
   "bus_stop_number":136,
   "fare":2
},
{
    
   "number": 15,
   "name":"Mahadevapura",
   "bus_id_number": 789,
   "bus_stop_number":137,
   "fare":2
},
{
    
   "number": 16,
   "name":"Dodda Nekkundi",
   "bus_id_number": 789,
   "bus_stop_number":138,
   "fare":2
},
{
    
   "number": 17,
   "name":"Karthiknagar",
   "bus_id_number": 789,
   "bus_stop_number":139,
   "fare":5
},
{
   
   "number": 18,
   "name":"Chinnappanahalli",
   "bus_id_number": 789,
   "bus_stop_number":140,
   "fare":2
},
{
   
   "number": 19,
   "name":"Marathahalli Bridge",
   "bus_id_number": 789,
   "bus_stop_number":141,
   "fare":2
},
{
  
   "number": 20,
   "name":"Innovative Multiplex",
   "bus_id_number": 789,
   "bus_stop_number":142,
   "fare":5
}]


      this.qrScannerComponent.getMediaDevices().then(devices => {
          console.log(devices);
          const videoDevices: MediaDeviceInfo[] = [];
          for (const device of devices) {
              if (device.kind.toString() === 'videoinput') {
                  videoDevices.push(device);
              }
          }
          if (videoDevices.length > 0){
              let choosenDev;
              for (const dev of videoDevices){
                  if (dev.label.includes('front')){
                      choosenDev = dev;
                      break;
                  }
              }
              if (choosenDev) {
                  this.qrScannerComponent.chooseCamera.next(choosenDev);
              } else {
                  this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
              }
          }
      });

      this.qrScannerComponent.capturedQr.subscribe(result => {
         this.pickuppoint=result;
         this.pickup(this.pickuppoint)
          console.log(result);
      });
    }
    private pickup_number :number;
    //Calculate Fare 
    pickup(val:any){
        for (let cal in this.stops_ids ){
            if (val == this.stops_ids[cal].name){
            console.log("AA",val,"#",this.stops_ids[cal].name);
            this.pickup_number=this.stops_ids[cal].number
            console.log("BB",this.pickup_number);
            }
           
            
        }
        return this.pickup_number
            }
            private destination_number:number;
            private payment:any="";
            destination(val:any){
                for (let cal in this.stops_ids ){
                    if (val == this.stops_ids[cal].name){
                    console.log("AA",val,"#",this.stops_ids[cal].name);
                    this.destination_number=this.stops_ids[cal].number
                    console.log("BB",this.destination_number);
                    }
                   
                    
                }

                this.fare();
                return this.destination_number
                    }
            private  sum:number=0;
    fare(){

        if (this.pickup_number==1 && this.destination_number <5){
            this.sum=5
        }
        else if (this.pickup_number>1 || this.destination_number<5){
            this.sum=12
        }
        else if (this.pickup_number>5 ||this.destination_number<15){
            this.sum=16
        }
        else if (this.pickup_number>15 || this.destination_number<20){
            this.sum=20
        }
       
    }
    private history :any[]=[];
    private receipts:any=''
    private auth:number=0;
    private passcode:number;
    private passcode_string:string;
    receipt() {
        // if (this.paymentMessageStatus == true) {
            this.passcode= Math.floor(100000 + Math.random() * 900000)
            
            if (this.payment == "Paytm" || this.payment == "UPI") {
                console.log("hereiam12")
                this.history.push({ "time": Date.now(), "start": this.pickuppoint, "end": this.Destination, "fare": this.sum * this.passenger_number, "transaction": this.payment, "status": 'successful','passcode':this.passcode })
                this.receipts = "Pass"
            }
            else if(this.payment == "Cash"){
                let verfy=this.Auth(this.auth)
                console.log("hereiam",verfy,true)
                if (verfy==true){
                    this.history.push({ "time": Date.now(), "start": this.pickuppoint, "end": this.Destination,"fare": this.sum * this.passenger_number, "transaction": this.payment, "status": 'successful','passcode':this.passcode })
                    this.receipts = "Pass"
                }
                else{
                    this.history.push({ "time": Date.now(), "start": this.pickuppoint, "end": this.Destination,"fare": this.sum * this.passenger_number, "transaction": this.payment, "status": 'fail' ,'passcode': this.passcode})
                    this.receipts = "Fail"
                }
            }

        // }
        // else if (this.paymentMessageStatus == false) {
        //     console.log("hereiam11")
        //     this.history.push({ "time": Date.now(), "start": this.pickuppoint, "end": this.Destination,"fare": this.sum * this.passenger_number, "transaction": this.payment, "status": 'successful' })
        //     this.receipts = "Fail"
        // }

    }
    private passenger_list=[1,2,3,4,5]
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
    private paymentMessage={};
    private paymentMessageStatus:boolean=false;
    postDummyPayMent(){
        let body={
            "aadhaar_id" : "547039586626",
             "otp" : "123456",
             "txn_id" : "547039586626" 
          }
      /*    
    this.appState.createService("https://ext.digio.in:444/test/otpkyc", body).subscribe(
    data => {console.log("body",data) },err => console.error(err),);
    */

        this.paymentMessage = [{ "kyc_data": { "name": "Gorthy Ravi Kiran", "date_of_birth": "21-05-1991", "gender": "M", "phone": "8375061855", "email": "gorthyravikiran@gmail.com", "photo": "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", "address": { "care_of": "S/O Sita Ramasarma", "house": "20-516-10", "street": "PARASUPETA", "locality": "NGO Colony", "village_town_or_city": "chilakalapudi", "sub_district": "", "district": "Krishna", "state": "Andhra Pradesh", "country": "India", "pincode": "521002" }, "status": true, "msg": "KYC done for Aadhaar number : XXXXXXXX6626", "time_stamp": "2018-06-01T14:39:53.002+05:30", "tx_id": "UKC:547039586626" } }]
        console.log('Message :: ',this.paymentMessage[0].kyc_data.status)
        
        return this.paymentMessage[0].kyc_data.status;
    }
    private sos_val:boolean=false;
    private sos_msg:boolean=false;
    sos(){
        this.appState.getLocation().subscribe(
                      
            data => {
                this.sos_val=true
                this.sos_msg=data
                console.log("geo",data) 
        },err => console.error(err),);
            
    }
    reset(){
   this.pickuppoint=""

   this.Destination=""
   this.bus_ids={}
   this.stops_ids={}
   this.selectedValue=''
   this.sum=0
   this.destination_number=0
   this.payment=""
   this.pickup_number=0
   
    }

    
  /**
   * Set our default values
   */
  public localState = { value: '' };
  /**
   * TypeScript public modifiers
   */
  constructor(
    public appState: AppState,
    public title: Title
  ) {

    this.postDummyPayMent()
  }

  // public ngOnInit() {
  //   console.log('hello `Home` component');
  //   /**
  //    * this.title.getData().subscribe(data => this.data = data);
  //    */
  // }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
  private isVisible:boolean;
  Login(){
      if(this.isVisible==false){
          this.postDummyPayMent()
          this.isVisible=true
      }
  }
  Logout(){
      if(this.paymentMessage[0].kyc_data.status){
          console.log("inside Logout :: ",this.paymentMessage[0].kyc_data.status)
    this.paymentMessage={}
    this.isVisible=false
    console.log("inside Logout1 :: ",this.isVisible,this.paymentMessage)
      }
  }
}
