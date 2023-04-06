import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() flag = new EventEmitter<string>();

  onSelect(text: string){
    this.flag.emit(text);
  }
}
