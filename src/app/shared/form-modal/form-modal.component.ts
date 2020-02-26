import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TileService } from '../tile-service/tile.service';
import { NgForm, FormGroup } from '@angular/forms';
import { SPECIFICATION } from '../../core/constants';

@Component({
  selector: 'app-Form-Modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent implements OnInit{
  @ViewChild('tileSpecificationForm', null) tileSpecificationForm: NgForm;
  specification:any;
  constructor(
    public activeModal: NgbActiveModal,
    private tileService:TileService) {
   }
  
   ngOnInit(){
    this.specification = this.tileService.getSpecificationFromStorage();
    if( this.specification == undefined ||this.specification == null) {
        this.specification = {};
        this.specification.width = SPECIFICATION.WIDTH;
        this.specification.height = SPECIFICATION.HEIGHT;
        this.specification.margin = SPECIFICATION.MARGIN;
    } 
    setTimeout(() => {
      this.tileSpecificationForm.setValue(this.specification);
    })
      
   }


  store(tileSpecificationForm) {
    this.tileService.storeSpecification(tileSpecificationForm.value);
  }

  update(tileSpecificationForm) {
    this.tileService.setTileSpecData(tileSpecificationForm.value);
  }

}
