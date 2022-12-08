import { Component } from '@angular/core';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import getTranscription from "../../services/conexionBackend"
@Component({
  selector: 'app-transcriptor',
  templateUrl: './transcriptor.component.html',
  styleUrls: ['./transcriptor.component.css']
})
export class TranscriptorComponent {
    lupa = faMagnifyingGlass;
    
    transcriptText(URL:any){
      if(!URL.value){
        return;
      }
      console.log(URL.value);
    }
}
