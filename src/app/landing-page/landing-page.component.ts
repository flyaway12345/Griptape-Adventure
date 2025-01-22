import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InfoGrabService } from './info-grab.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent{
  title = 'griptape-adventure';


// constructor(private infoGrabService:InfoGrabService) {}
// eventList: Array<any> = [];
// eventID:number = 1;
// public baseData() {
//   this.infoGrabService.getData().subscribe(res => {
//     this.eventList = res;
//     console.log("data aquired");
//   });
// }


//   ///fix all this spegetti code later, just get the functionallity working\
//   eventDate:string = this.eventList[1].eventTime;
//   eventTime:string =this.eventList[1].eventTime;
//   masterCode:string = this.eventList[1].masterCode;
//   masterButtonLink:string = this.eventList[1].masterButtonLink;
//   guestCode:string = this.eventList[1].guestCode;
//   guestButtonLink:string = this.eventList[1].guestButtonLink;
//   helpLink:string = this.eventList[1].helpLink;
//   payLink:string = this.eventList[1].payLink;


eventDate:string ="tba";
eventTime:string ="tba";
masterCode:string = "master";
masterButtonLink:string = "https://himedia.gg";
guestCode:string = "guest";
guestButtonLink:string = "https://himedia.gg";
helpLink:string = "https://himedia.gg";
payLink:string = "https://himedia.gg";

  allowInputOnLandingPage:boolean = false;

  landingPage:boolean = true;
  @Input() checkGuestOrMaster:string = "";
  pathSelect:string = "";
  MP1:boolean = false;
  MP2:boolean = false;
  MP3:boolean = false;
  MP4:boolean = false;
  MP4D1:boolean = false;
  MP4D2:boolean = false;
  MP4D3:boolean = false;
  MP4D4:boolean = false;
  MP4D4P1:boolean = false;
  MP4D4P2:boolean = false;
  MP4D4P3:boolean = false;
  MP4D4P4:boolean = false;
  MP4L1:boolean = false;
  MP4L2:boolean = false;
  MP4L3:boolean = false;
  lastPage:boolean = false;


choosePath(){
  if(this.checkGuestOrMaster == this.masterCode){
    this.pathSelect = "M";
    this.onClickMP1();
  }else if(this.checkGuestOrMaster == this.guestCode){
    this.pathSelect = "G";
    this.onClickMP1();
  }else{
    this.pathSelect = "";
  }
}

onClickLandingPage(){
  this.landingPage = true;
  this.MP1 = false;
  this.MP2= false;
  this.MP3 = false;
  this.MP4 = false;
  this.MP4D1 = false;
  this.MP4D2 = false;
  this.MP4D3 = false;
  this.MP4D4 = false;
  this.MP4D4P1 = false;
  this.MP4D4P2 = false;
  this.MP4D4P3 = false;
  this.MP4D4P4 = false;
  this.MP4L1 = false;
  this.MP4L2 = false;
  this.MP4L3 = false;
  this.lastPage = false;
}
onClickMP1(){
  this.landingPage = false;
  this.MP1 = true;
  this.MP2= false;
  this.MP3 = false;
  this.MP4 = false;
  this.MP4D1 = false;
  this.MP4D2 = false;
  this.MP4D3 = false;
  this.MP4D4 = false;
  this.MP4D4P1 = false;
  this.MP4D4P2 = false;
  this.MP4D4P3 = false;
  this.MP4D4P4 = false;
  this.MP4L1 = false;
  this.MP4L2 = false;
  this.MP4L3 = false;
  this.lastPage = false;
}
onClickMP2(){
  this.landingPage = false;
  this.MP1 = false;
  this.MP2= true;
  this.MP3 = false;
  this.MP4 = false;
  this.MP4D1 = false;
  this.MP4D2 = false;
  this.MP4D3 = false;
  this.MP4D4 = false;
  this.MP4D4P1 = false;
  this.MP4D4P2 = false;
  this.MP4D4P3 = false;
  this.MP4D4P4 = false;
  this.MP4L1 = false;
  this.MP4L2 = false;
  this.MP4L3 = false;
  this.lastPage = false;
}
onClickMP3(){
  this.landingPage = false;
  this.MP1 = false;
  this.MP2= false;
  this.MP3 = true;
  this.MP4 = false;
  this.MP4D1 = false;
  this.MP4D2 = false;
  this.MP4D3 = false;
  this.MP4D4 = false;
  this.MP4D4P1 = false;
  this.MP4D4P2 = false;
  this.MP4D4P3 = false;
  this.MP4D4P4 = false;
  this.MP4L1 = false;
  this.MP4L2 = false;
  this.MP4L3 = false;
  this.lastPage = false;
}
onClickMP4(){
  this.landingPage = false;
  this.MP1 = false;
  this.MP2= false;
  this.MP3 = false;
  this.MP4 = true;
  this.MP4D1 = false;
  this.MP4D2 = false;
  this.MP4D3 = false;
  this.MP4D4 = false;
  this.MP4D4P1 = false;
  this.MP4D4P2 = false;
  this.MP4D4P3 = false;
  this.MP4D4P4 = false;
  this.MP4L1 = false;
  this.MP4L2 = false;
  this.MP4L3 = false;
  this.lastPage = false;
}
onClickMP4D1(){
  this.landingPage = false;
  this.MP1 = false;
  this.MP2= false;
  this.MP3 = false;
  this.MP4 = false;
  this.MP4D1 = true;
  this.MP4D2 = false;
  this.MP4D3 = false;
  this.MP4D4 = false;
  this.MP4D4P1 = false;
  this.MP4D4P2 = false;
  this.MP4D4P3 = false;
  this.MP4D4P4 = false;
  this.MP4L1 = false;
  this.MP4L2 = false;
  this.MP4L3 = false;
  this.lastPage = false;
}
onClickMP4D2(){
  this.landingPage = false;
  this.MP1 = false;
  this.MP2= false;
  this.MP3 = false;
  this.MP4 = false;
  this.MP4D1 = false;
  this.MP4D2 = true;
  this.MP4D3 = false;
  this.MP4D4 = false;
  this.MP4D4P1 = false;
  this.MP4D4P2 = false;
  this.MP4D4P3 = false;
  this.MP4D4P4 = false;
  this.MP4L1 = false;
  this.MP4L2 = false;
  this.MP4L3 = false;
  this.lastPage = false;
}
onClickMP4D3(){
  this.landingPage = false;
  this.MP1 = false;
  this.MP2= false;
  this.MP3 = false;
  this.MP4 = false;
  this.MP4D1 = false;
  this.MP4D2 = false;
  this.MP4D3 = true;
  this.MP4D4 = false;
  this.MP4D4P1 = false;
  this.MP4D4P2 = false;
  this.MP4D4P3 = false;
  this.MP4D4P4 = false;
  this.MP4L1 = false;
  this.MP4L2 = false;
  this.MP4L3 = false;
  this.lastPage = false;
}
onClickMP4D4(){
  this.landingPage = false;
  this.MP1 = false;
  this.MP2= false;
  this.MP3 = false;
  this.MP4 = false;
  this.MP4D1 = false;
  this.MP4D2 = false;
  this.MP4D3 = false;
  this.MP4D4 = true;
  this.MP4D4P1 = false;
  this.MP4D4P2 = false;
  this.MP4D4P3 = false;
  this.MP4D4P4 = false;
  this.MP4L1 = false;
  this.MP4L2 = false;
  this.MP4L3 = false;
  this.lastPage = false;
}onClickMP4D4P1(){
  this.landingPage = false;
  this.MP1 = false;
  this.MP2= false;
  this.MP3 = false;
  this.MP4 = false;
  this.MP4D1 = false;
  this.MP4D2 = false;
  this.MP4D3 = false;
  this.MP4D4 = false;
  this.MP4D4P1 = true;
  this.MP4D4P2 = false;
  this.MP4D4P3 = false;
  this.MP4D4P4 = false;
  this.MP4L1 = false;
  this.MP4L2 = false;
  this.MP4L3 = false;
  this.lastPage = false;
}
onClickMP4D4P2(){
  this.landingPage = false;
  this.MP1 = false;
  this.MP2= false;
  this.MP3 = false;
  this.MP4 = false;
  this.MP4D1 = false;
  this.MP4D2 = false;
  this.MP4D3 = false;
  this.MP4D4 = false;
  this.MP4D4P1 = false;
  this.MP4D4P2 = true;
  this.MP4D4P3 = false;
  this.MP4D4P4 = false;
  this.MP4L1 = false;
  this.MP4L2 = false;
  this.MP4L3 = false;
  this.lastPage = false;
}
onClickMP4D4P3(){
  this.landingPage = false;
  this.MP1 = false;
  this.MP2= false;
  this.MP3 = false;
  this.MP4 = false;
  this.MP4D1 = false;
  this.MP4D2 = false;
  this.MP4D3 = false;
  this.MP4D4 = false;
  this.MP4D4P1 = false;
  this.MP4D4P2 = false;
  this.MP4D4P3 = true;
  this.MP4D4P4 = false;
  this.MP4L1 = false;
  this.MP4L2 = false;
  this.MP4L3 = false;
  this.lastPage = false;
}
onClickMP4D4P4(){
  this.landingPage = false;
  this.MP1 = false;
  this.MP2= false;
  this.MP3 = false;
  this.MP4 = false;
  this.MP4D1 = false;
  this.MP4D2 = false;
  this.MP4D3 = false;
  this.MP4D4 = false;
  this.MP4D4P1 = false;
  this.MP4D4P2 = false;
  this.MP4D4P3 = false;
  this.MP4D4P4 = true;
  this.MP4L1 = false;
  this.MP4L2 = false;
  this.MP4L3 = false;
  this.lastPage = false;
}
onClickMP4L1(){
  this.landingPage = false;
  this.MP1 = false;
  this.MP2= false;
  this.MP3 = false;
  this.MP4 = false;
  this.MP4D1 = false;
  this.MP4D2 = false;
  this.MP4D3 = false;
  this.MP4D4 = false;
  this.MP4D4P1 = false;
  this.MP4D4P2 = false;
  this.MP4D4P3 = false;
  this.MP4D4P4 = false;
  this.MP4L1 = true;
  this.MP4L2 = false;
  this.MP4L3 = false;
  this.lastPage = false;
}
onClickMP4L2(){
  this.landingPage = false;
  this.MP1 = false;
  this.MP2= false;
  this.MP3 = false;
  this.MP4 = false;
  this.MP4D1 = false;
  this.MP4D2 = false;
  this.MP4D3 = false;
  this.MP4D4 = false;
  this.MP4D4P1 = false;
  this.MP4D4P2 = false;
  this.MP4D4P3 = false;
  this.MP4D4P4 = false;
  this.MP4L1 = false;
  this.MP4L2 = true;
  this.MP4L3 = false;
  this.lastPage = false;
}
onClickMP4L3(){
  this.landingPage = false;
  this.MP1 = false;
  this.MP2= false;
  this.MP3 = false;
  this.MP4 = false;
  this.MP4D1 = false;
  this.MP4D2 = false;
  this.MP4D3 = false;
  this.MP4D4 = false;
  this.MP4D4P1 = false;
  this.MP4D4P2 = false;
  this.MP4D4P3 = false;
  this.MP4D4P4 = false;
  this.MP4L1 = false;
  this.MP4L2 = false;
  this.MP4L3 = true;
  this.lastPage = false;
}
onClicklastPage(){
  this.landingPage = false;
  this.MP1 = false;
  this.MP2= false;
  this.MP3 = false;
  this.MP4 = false;
  this.MP4D1 = false;
  this.MP4D2 = false;
  this.MP4D3 = false;
  this.MP4D4 = false;
  this.MP4D4P1 = false;
  this.MP4D4P2 = false;
  this.MP4D4P3 = false;
  this.MP4D4P4 = false;
  this.MP4L1 = false;
  this.MP4L2 = false;
  this.MP4L3 = false;
  this.lastPage = true;
}


}
