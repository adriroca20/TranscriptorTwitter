import { Component } from '@angular/core';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-transcriptor',
  templateUrl: './transcriptor.component.html',
  styleUrls: ['./transcriptor.component.css']
})
export class TranscriptorComponent {
    lupa = faMagnifyingGlass;
}
