import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from "@angular/core";

@Directive({
  selector: '[appDropdown]',
  exportAs:'appDropDown'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    console.log("isOpen: "+this.isOpen);
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}


  // private isOpen = false;
  // constructor(private elementRef: ElementRef,
  //             private renderer: Renderer2) {
  // }
  //
  // @HostListener('click')
  // onClick() {
  //   const dropdown = this.elementRef.nativeElement.nextElementSibling;
  //   if (!this.isOpen) {
  //     this.renderer.addClass(dropdown, 'show');
  //   } else {
  //     this.renderer.removeClass(dropdown, 'show');
  //   }
  //   this.isOpen = !this.isOpen;
  // }

}
