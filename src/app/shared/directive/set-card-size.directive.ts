/* tslint:disable:member-ordering */
import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[cardResize]'
})
export class SetCardSizeDirective implements OnInit {

    constructor(private el: ElementRef) { }

    @Input('cardWidth') cardWidth: string;

    @Input('cardHeight') cardHeight: string;

    @Input('cardMargin') cardMargin: string;

    ngOnInit(): void {
        this.setSize(this.cardWidth, this.cardHeight, this.cardMargin)
    }


    private setSize(width: string, height: string, margin: string) {
        this.el.nativeElement.style.width = width + 'px';
        this.el.nativeElement.style.height = height + 'px';
        this.el.nativeElement.style.margin = margin + 'px';
    }
}