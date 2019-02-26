import { Directive, ElementRef, Input,AfterViewInit, HostListener } from '@angular/core';

@Directive({
  selector: '[changecolor]'
})
export class ChangecolorDirective implements AfterViewInit{

  @Input("nagendra")
  public pcolor:String;

  //element = this is reference of host element
  constructor(private element:ElementRef ) { 
      //    element.nativeElement.style.display="none";
      element.nativeElement.style.backgroundColor="yellow";
      console.log("Cons is called first");
  }

  ngAfterViewInit(): void {
    // this.element.nativeElement.style.display = this.pcolor;
    this.element.nativeElement.style.backgroundColor=this.pcolor;
    console.log("ngAfterViewInit is called second");
  }

  @HostListener("mouseenter")
  onMouseEnter(){
    this.element.nativeElement.style.backgroundColor="red";
  }

  @HostListener("mouseleave")
  onMouseLeave(){
    this.element.nativeElement.style.backgroundColor="yellow";
  }


}
