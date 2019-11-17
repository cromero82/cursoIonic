import { NoticiasService } from './../servicios/noticias.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-noticias',
  templateUrl: './listado-noticias.page.html',
  styleUrls: ['./listado-noticias.page.scss'],
})
export class ListadoNoticiasPage implements OnInit {

  constructor(private service: NoticiasService) { }

  ngOnInit() {
    this.service.verNoticias().subscribe( data => {
      console.log(data);
    }, (err => {
      console.log(err);
    }));
  }

}
