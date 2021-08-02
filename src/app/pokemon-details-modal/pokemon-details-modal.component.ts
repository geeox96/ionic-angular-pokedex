import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pokemon-details-modal',
  templateUrl: './pokemon-details-modal.component.html',
  styleUrls: ['./pokemon-details-modal.component.scss'],
})
export class PokemonDetailsModalComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  closeDetails() {
    this.modalCtrl.dismiss();
  }

}
