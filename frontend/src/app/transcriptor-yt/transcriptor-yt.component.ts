import { Component } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { getTranscription } from '../services/conexionBackend';

@Component({
  selector: 'app-transcriptor-yt',
  templateUrl: './transcriptor-yt.component.html',
  styleUrls: ['./transcriptor-yt.component.css']
})
export class TranscriptorYTComponent {
  lupa = faMagnifyingGlass;
  estado : boolean = false;
  mensajeAgradecimiento : boolean = false;
  opciones:any ={name:false,time:false, user: false };
  async transcriptText(URL:any){  
    console.log("buscando");
    if(!URL.value){
      return;
    }
    this.estado = true;
    await getTranscription(URL.value, this.opciones);
    this.mensajeAgradecimiento= true;
    this.estado= false;
  }
  onChangeOptions($event:any){
    this.opciones[$event.target.value] = $event.target.checked;
    console.log(this.opciones);
  }
}
