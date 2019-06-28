import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {
heroe:any={};
  constructor(private activatedRuote: ActivatedRoute,
              private _heroeService: HeroesService) {
    this.activatedRuote.params.subscribe(params=>{

      this.heroe = this._heroeService.getHeroe(params['id']);
    })
   }

  ngOnInit() {
  }

}
