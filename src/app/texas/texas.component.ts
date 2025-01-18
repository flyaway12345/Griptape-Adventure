import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-texas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './texas.component.html',
  styleUrl: './texas.component.css'
})
export class TexasComponent {

  eventDate:string ="tba";
  eventTime:string ="tba";
  buttonLink:string = "#";
  masterCode:string = "master";
  guestCode:string = "guest";

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
  if(this.checkGuestOrMaster.toLowerCase() == this.masterCode){
    this.pathSelect = "M";
    this.onClickMP1();
  }else if(this.checkGuestOrMaster.toLowerCase() == this.guestCode){
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
