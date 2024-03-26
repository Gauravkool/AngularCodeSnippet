import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DbserviceService } from '../../services/dbservice.service';
import { Snippet } from '../../../models/snippet';

@Component({
  selector: 'app-create-snippet',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-snippet.component.html',
  styleUrl: './create-snippet.component.css',
})
export class CreateSnippetComponent {
  constructor(private dbService: DbserviceService) {}
  title = new FormControl('', [Validators.required]);
  code = new FormControl('', [Validators.required]);
  snippetForm = new FormGroup({ title: this.title, code: this.code });
  async save() {
    console.log(this.snippetForm.value);
    await this.dbService.createSnippet(this.snippetForm.value as Snippet);
  }
}
