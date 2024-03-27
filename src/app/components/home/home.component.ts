import { Component } from '@angular/core';
import { DbserviceService } from '../../services/dbservice.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  items: { id: string; title: string }[] = [];
  constructor(private dbService: DbserviceService) {}
  ngOnInit() {
    this.dbService.getAllSnippets().then((data: any) => {
      this.items = data;
      console.log('data', data);
    });
  }
}
