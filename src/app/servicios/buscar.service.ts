import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BuscarService {

  constructor(private http:HttpClient) { }

  APIURL="https://api.deezer.com/"; 

  getMusic(name:string){
    return this.http.get<any>('https://api.deezer.com/search?q='+ name)
  }
  getGenero(){
    return this.http.get<any>(this.APIURL+"genre");
  }

  getAlbumForArtist(idArtista:number){
    return this.http.get<any>(this.APIURL+"artist/"+idArtista+"/albums");
  }
  getTrackAlbum(idalbum:number){
  
    return this.http.get<any>(this.APIURL+"album/"+idalbum+"/tracks");
  }
}
