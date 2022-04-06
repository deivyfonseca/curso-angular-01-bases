import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroeBorrado: string = '';
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];
  
  borrarHeroe(): void {
    // También se puede usar el !
    this.heroeBorrado = this.heroes.pop() || '';
    console.log(this.heroeBorrado);
    
  }
}
