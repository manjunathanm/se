import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { TileService } from '../tile-service/tile.service';
import { SPECIFICATION } from '../../core/constants';
@Directive({
    selector: '[cardResize]'
})
export class SetCardSizeDirective implements OnInit {

    constructor(
        private el: ElementRef,
        private tileService:TileService
        ) { }

    specification:any = {};
    ngOnInit(): void {
        this.specification = this.tileService.getSpecificationFromStorage();
        if( this.specification == undefined ||this.specification == null) {
            this.specification = {};
            this.specification.width = SPECIFICATION.WIDTH;
            this.specification.height = SPECIFICATION.HEIGHT;
            this.specification.margin = SPECIFICATION.MARGIN;
            this.setSize();
        } 
        else {
            this.setSize();
        }
        this.tileService.getTileSpecData().subscribe (data =>{
            this.specification = data;
            this.setSize();
        });
    }

    private setSize() {
        this.el.nativeElement.style.width = this.specification.width + 'px';
        this.el.nativeElement.style.height = this.specification.height + 'px';
        this.el.nativeElement.style.margin =   this.specification.margin + 'px';
    }
}