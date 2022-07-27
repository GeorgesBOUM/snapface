import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!:FaceSnap;
  
  constructor(private faceSnapsService:FaceSnapsService,
              private router: Router){}

  buttonText!: string;

  ngOnInit(): void {
    this.buttonText = "oh! snap!"
  }

  onSnap(): void{
    if (this.buttonText === "oh! snap!") {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id);
      this.buttonText = "oops! unsnap!"
    } else {
      this.faceSnapsService.unsnapFaceSnapById(this.faceSnap.id);
      this.buttonText = "oh! snap!"
    }
  }

  onViewFaceSnap():void{
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
