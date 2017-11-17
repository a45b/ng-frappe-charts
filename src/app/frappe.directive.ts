import { Directive, ElementRef, Input, Output, EventEmitter } from '@angular/core';

declare var Chart: any; // just to avoid error marked by editor. Optional declaration

@Directive({
  selector: '[appFrappe]'
})
export class FrappeDirective {

  @Input() title: string;
  @Input() data: any;
  @Input() type: string;
  @Input() height: number;

  @Output() frappe: EventEmitter<any> = new EventEmitter();

  constructor(
    private el: ElementRef
  ) {
    this.type = this.type || 'bar';
    this.height = this.height || 250;
  }

  ngOnChanges() {
    let chart = new Chart({
      parent: this.el.nativeElement,
      title: this.title,
      region_fill: 1,
      data: this.data,
      type: this.type, // or 'line', 'scatter', 'pie', 'percentage'
      height: this.height
    });
    this.frappe.emit(chart);
  }

}
