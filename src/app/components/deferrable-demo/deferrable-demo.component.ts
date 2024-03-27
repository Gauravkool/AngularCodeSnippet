import { Component } from '@angular/core';
import { HeavyComponent } from '../heavy/heavy.component';

@Component({
  selector: 'app-deferrable-demo',
  standalone: true,
  imports: [HeavyComponent],
  templateUrl: './deferrable-demo.component.html',
  styleUrl: './deferrable-demo.component.css'
})
export class DeferrableDemoComponent {

}
