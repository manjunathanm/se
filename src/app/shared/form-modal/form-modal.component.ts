import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-Form-Modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent {

  constructor(public activeModal: NgbActiveModal) { }

  store(tileSpecificationForm) {
    console.log(tileSpecificationForm);
    //this.activeModal.close();
  }

  update(tileSpecificationForm) {
    console.log(tileSpecificationForm);
    // this.activeModal.close();
  }


}
