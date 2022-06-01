import { Component, OnInit } from '@angular/core';
import { BuscarService } from 'src/app/servicios/buscar.service';



@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.css']
})
export class GeneroComponent implements OnInit {
genres:any;
  constructor(private buscarService:BuscarService) { }

  ngOnInit(): void {
    this.getGenre()
  }
   getGenre(){
    this.buscarService.getGenero().subscribe
    ({   
       next:(s)=>{
         this.genres=s.data;
         //console.log(this.genres)
       },
       error:(_e)=>{
       debugger
       }
    })

   }
}
