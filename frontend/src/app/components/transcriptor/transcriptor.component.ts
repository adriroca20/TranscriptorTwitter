import { Component } from '@angular/core';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import {getTranscription} from "../../services/conexionBackend"
@Component({
  selector: 'app-transcriptor',
  templateUrl: './transcriptor.component.html',
  styleUrls: ['./transcriptor.component.css']
})
export class TranscriptorComponent {
    lupa = faMagnifyingGlass;

    async transcriptText(URL:any){
      console.log("buscando");
      if(!URL.value){
        return;
      }
      await getTranscription(URL.value);
    }
}
