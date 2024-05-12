import { Component, Input } from '@angular/core';
import { HeroModel } from '../../../models/hero.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  @Input() hero!: HeroModel;

}
