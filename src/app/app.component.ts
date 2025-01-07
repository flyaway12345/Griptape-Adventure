import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'griptape-adventure';
  landingPage:boolean = false;
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
onClickM1ToM2(){
this.MP1 = false;
this.MP2 = true;
}
}
