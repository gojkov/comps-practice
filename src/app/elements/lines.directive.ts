import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appLines]'
})
export class LinesDirective {

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }

  @Input('appLines') set render(lines: number){
    this.viewContainer.clear();

    for (let i = 0; i < lines; i++){
      this.viewContainer.createEmbeddedView(this.templateRef, {});
    }
  }
}
