import { Injectable } from '@angular/core';

export interface Pokemon {
  nome: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})

export class DataService {
  public pokemons: Pokemon[] = [
    {
      nome: 'Pokemon 1',
      id: 1
    },
    {
      nome: 'Pokemon 2',
      id: 2
    },
    {
      nome: 'Pokemon 3',
      id: 3
    },
    {
      nome: 'Pokemon 4',
      id: 4
    },
    {
      nome: 'Pokemon 5',
      id: 5
    },
  ];

  constructor() { }

  public getPokemons(): Pokemon[] {
    return this.pokemons;
  }

  // public getMessageById(id: number): Pokemon {
  //   return this.pokemons[id];
  // }
}
