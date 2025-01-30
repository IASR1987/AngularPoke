import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-super-hero-table',
  imports: [CommonModule],
  templateUrl: './super-hero-table.component.html',
  styleUrl: './super-hero-table.component.css'
})
export class SuperHeroTableComponent {
  // Array con los Pokémon y sus detalles
  pokemon = [
    { name: 'Mewtwo', attack: 'Psíquico', imgSrc: 'assets/mewtwo.gif',isVisible: true },
    { name: 'Dragonite', attack: 'Puño Draco', imgSrc: 'assets/dragonite.gif',isVisible: true  },
    { name: 'Dugtrio', attack: 'Excavar', imgSrc: 'assets/dugtrio.gif',isVisible: true  },
    { name: 'Odish', attack: 'Danza Pétalo', imgSrc: 'assets/odish.gif',isVisible: true  },
    { name: 'Gyarados', attack: 'Surf', imgSrc: 'assets/gyarados.gif',isVisible: true  },
    { name: 'Machamp', attack: 'Puño Dinámico', imgSrc: 'assets/machamp.gif',isVisible: true  },
    { name: 'Zapdos', attack: 'Rayo', imgSrc: 'assets/zapdos.gif',isVisible: true  },
    { name: 'Ninetales', attack: 'Llamarada', imgSrc: 'assets/ninetales.gif',isVisible: true }
  ];
  // Método para manejar el clic en un Pokémon
  onSelectPokemon(poke: any) {
    if(poke.isVisible){
      alert(`Te elijo a tí ${poke}`);
    }else{
      alert(`Vuelve a casa ${poke.name}`)
    }
    
    console.log(poke);
  }

  
  // para maneja la visibilidad
  onVisibility(poke: any) {
    console.log(poke);
      poke.isVisible=!poke.isVisible 
    // 
    console.log(poke.isVisible);
  }
}


