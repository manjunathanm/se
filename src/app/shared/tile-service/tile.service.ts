import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class TileService {
    public constructor(private http: HttpClient) { }

    private tileDataStoreObservable = new Subject<any>();

    SpecificationData = this.tileDataStoreObservable.asObservable();

    //Set tile spec data.
    setTileSpecData(SpecificationData: any) {
        this.tileDataStoreObservable.next(SpecificationData);
    }

    //get tile spec data.
    getTileSpecData() {
      return this.SpecificationData;
    }

    // store the data in the local storage
    storeSpecification(SpecificationData){
        this.setTileSpecData(SpecificationData);
        localStorage.setItem('specification',JSON.stringify(SpecificationData))
    }

    // read data from local storage
    getSpecificationFromStorage(){
       return JSON.parse(localStorage.getItem('specification'));
    }


    readData() {
        return this.http.get('assets/data/data.json');
    }
   

}
