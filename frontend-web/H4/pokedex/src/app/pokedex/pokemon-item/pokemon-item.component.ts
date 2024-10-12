import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { Pokemon } from '../../model/pokemon.model';

@Component({
  selector: 'app-pokemon-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './pokemon-item.component.html',
  styleUrl: './pokemon-item.component.css'
})
export class PokemonItemComponent {
  @Input() pokemon!: Pokemon;

  @Input() isSelected: boolean = false;

  capitalize(type: string) {
    return type.charAt(0).toUpperCase() + type.slice(1)
  }

  getIconSrc(pokemon: Pokemon) {
    const idString = this.pokemon.id.toString().padStart(3, '0');
    return "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/" + idString +".png";
  }
}