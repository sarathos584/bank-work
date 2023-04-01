import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appMydirectives]'
})
export class MydirectivesDirective {

  constructor(private el:ElementRef) { 

    console.log(el)
    this.el.nativeElement.style.backgroundColor="red"


  }

}