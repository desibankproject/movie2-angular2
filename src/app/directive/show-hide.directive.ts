import { Directive, TemplateRef,ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[tshow]'
})
export class ShowHideDirective {
   
  //element = this is reference of host element
  constructor(private templateRef:TemplateRef<any>,private viewContainer:ViewContainerRef ) { 
   
  }
  
  //definining setter method
  @Input("tshow")
  public set tshow(pvalue:boolean)  {
        if(pvalue){
             // for(var x=1;x<=10;x++){
                this.viewContainer.createEmbeddedView(this.templateRef);  
              //}  
        }else{
            this.viewContainer.clear();
        }
  }
  

}
