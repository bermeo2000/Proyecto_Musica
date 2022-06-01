import { Component, OnInit } from '@angular/core';
import { BuscarService } from 'src/app/servicios/buscar.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  busqueda:Array<any> = [];
  album:any;
  track:any;
  infoArtist:boolean = false;

  constructor(private buscarService:BuscarService) { }

  ngOnInit(): void {
    this.getMusic("BAD BUNNY")
   }


   getMusic(name:any){
    let d;
    if(name.value){
      d=name.value;
    } else{
      d=name;
    }
      this.buscarService.getMusic(d).subscribe({
      next:(s:any)=>{
        this.busqueda = s.data;
        this.infoArtist = true;
        this.getAlbumforartist(this.busqueda[0].artist.id);
        
      },
      error: (e)=>{
        debugger
      }
    })

  }

  getAlbumforartist(idartista:number){
    this.buscarService.getAlbumForArtist(idartista).subscribe({
      next: (s) =>{
       this.album=s.data;
       //this.getTrack(this.album.id);
      },
      error: (e)=>{
        debugger
      },

    })
  }


  getTrack(id:number){
    this.buscarService.getTrackAlbum(id).subscribe({
      next: (s) =>{
        debugger
       this.track=s.data;
       debugger
       },
       error: (e)=>{
         debugger
       },
    })
  }

}
