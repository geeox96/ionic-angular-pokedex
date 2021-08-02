import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { PokemonDetailsModalComponent } from '../pokemon-details-modal/pokemon-details-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  pokemons: any = [];
  index = 1;

  constructor(private http: HttpClient, private modalCtrl: ModalController) {}

  ngOnInit(): void {
    this.http.get('https://pokeapi.co/api/v2/pokemon?limit=151').subscribe(data =>{
      const results: any = data;
      results.results.forEach(poke => {
        const newPoke = {
          id: this.index,
          name: poke.name,
          urlForMore: poke.url
        };
        this.index++;
        this.pokemons.push(newPoke);
      });
      this.index = 1;
    });
  }

  async openModal(sendDetail): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: PokemonDetailsModalComponent,
      componentProps: sendDetail
    });

    await modal.present();
  }

  async viewDetails(url): Promise<void> {

    const sendDetail: any = await this.http.get(url).subscribe(data =>{
      console.log(data);
      const p: any = data;
      const poke = {
        name: p.name,
        id: p.id,
        xp: p.base_experience
      };
      this.openModal(poke);
    });
  }
}
