import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ms-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() text: string;
}
