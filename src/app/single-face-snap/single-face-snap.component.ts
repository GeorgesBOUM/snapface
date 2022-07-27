import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  @Input() faceSnap!:FaceSnap;
  
  constructor(private faceSnapsService:FaceSnapsService,
              private route:ActivatedRoute){}

  buttonText!: string;

  ngOnInit(): void {
    this.buttonText = "oh! snap!"
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
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
}
