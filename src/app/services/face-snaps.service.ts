import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable(
    {providedIn: 'root'}
)
export class FaceSnapsService{
    snapList: FaceSnap[] = [
        {
          id: 1,
          title: "Archibald", 
          description: "Mon meilleur ami", 
          createDate : new Date() ,
          snaps : 200, 
          imageUrl : "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg"
        },
        {
          id:2,
          title: "Raspburry", 
          description : "Miam", 
          createDate : new Date(), 
          snaps : 0,
          imageUrl: "https://cdn.pixabay.com/photo/2022/07/10/20/18/raspberry-7313702_1280.jpg", 
          location: "forêt"
        }
    ];

    getAllFaceSnaps():FaceSnap[]{
        return this.snapList;
    }

    getFaceSnapById(id:number):FaceSnap{
        const faceSnap = this.snapList.find(faceSnap => faceSnap.id === id);
        if (faceSnap) {
            return faceSnap;
        } else {
            throw new Error('FaceSnap introuvable!');
        }
    }

    snapFaceSnapById(id:number):void{
        const faceSnap = this.getFaceSnapById(id);
        faceSnap.snaps++;
    }

    unsnapFaceSnapById(id:number):void{
        const faceSnap = this.getFaceSnapById(id);
        faceSnap.snaps--;
    }
}