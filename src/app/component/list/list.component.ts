import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormModalComponent } from 'src/app/shared/form-modal/form-modal.component';
import { Router } from '@angular/router';
import { InfoModalComponent } from 'src/app/shared/info-modal/info-modal.component';
import { TileService } from 'src/app/shared/tile-service/tile.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  specifciation:any = {};
  visible = true;
  modalRef;
  data; 

  constructor(
    private modalService: NgbModal, 
    private router: Router,
    private tileService:TileService
    ) { }

  ngOnInit(){
    this.tileService.readData().subscribe( data => {
      this.data = data;
    })
  }

  openFormModal() {
    this.visible = false
    this.modalRef = this.modalService.open(FormModalComponent, {
      windowClass: 'form-modal-class',
      backdropClass: 'form-modal-class-backdrop'
    });
  }

  close() {
    this.modalRef.close()
    this.visible = true;
  }

  showDetails(data) {
    this.router.navigateByUrl('/detail', { state: data });

  }

  toggleFavorite(obj) {
    obj.favorite = !obj.favorite;
  }

  openInfoModal(data) {
    this.modalRef = this.modalService.open(InfoModalComponent, {
      windowClass: 'info-modal-class',
      backdropClass: 'info-modal-class-backdrop'
    });
    this.modalRef.componentInstance.data = data;
  }

}
