import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { VideoComponent } from 'src/app/dialogs/video/video.component';
import SwiperCore, { EffectFade,Controller, Navigation,
  Pagination,
  Scrollbar,
  A11y, } from 'swiper';
SwiperCore.use([Controller,Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade]);
interface Features {
  tag: string,
  state: boolean,
  url:string
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  active_link = true;
  features!: Features[];
  indexNumber = 0;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.features= [
      {
        tag: "To-Do Lists",
        state: true ,
        url: '../../../assets/features/task-view-checklist.png'
      },
      {
        tag: "Projects",
        state: false ,
        url: '../../../assets/features/board-view.png'
      },
      {
        tag: "Spreadsheets",
        state: false ,
        url: '../../../assets/features/spreadsheet.png'
      },
      {
        tag: "Email",
        state: false ,
        url: '../../../assets/features/inbox-view-flat.png'
      },
      {
        tag: "Event",
        state: false ,
        url: '../../../assets/features/calendar-view.png'
      },
      {
        tag: "Remainders",
        state: false ,
        url: '../../../assets/features/timeline.png'
      },
      {
        tag: "GoalTracking",
        state: false ,
        url: '../../../assets/features/box-view.png'
      },
      {
        tag: "Time Tracking",
        state: false ,
        url: '../../../assets/features/time-tracking.png'
      },
      {
        tag: "Screenshots & Recording",
        state: false ,
        url: '../../../assets/features/clip.jpg'
      },
      {
        tag: "Resource Management",
        state: false ,
        url: '../../../assets/features/resource-management.png'
      },
      {
        tag: "Comments & Chat",
        state: false ,
        url: '../../../assets/features/conversation.png'
      },
      
    ]


  }
  openDialog(): void {
    const dialogRef = this.dialog.open(VideoComponent, {
        hasBackdrop : true,
        backdropClass: 'backdropBackground'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
       
    });
  }

  onSwiper(swiper: any) {
    console.log("Sipe event"+swiper.index);
  }
  onSlideChange() {
    console.log('slide change');
  }


 

}
