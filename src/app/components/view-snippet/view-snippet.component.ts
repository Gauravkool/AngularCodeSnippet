import { Component } from '@angular/core';
import { DbserviceService } from '../../services/dbservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-snippet',
  standalone: true,
  imports: [],
  templateUrl: './view-snippet.component.html',
  styleUrl: './view-snippet.component.css',
})
export class ViewSnippetComponent {
  codeSnippet = { title: '', code: '' };

  constructor(
    private route: ActivatedRoute,
    private dbService: DbserviceService
  ) {}

  ngOnInit() {
    const docId = this.route.snapshot.paramMap.get('id');
    this.dbService.getSnippetById(docId!).then((data: any) => {
      console.log('data', data);
      return (this.codeSnippet = data);
    });
  }
}
