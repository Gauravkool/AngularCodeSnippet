import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-snippet',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-snippet.component.html',
  styleUrl: './create-snippet.component.css',
})
export class CreateSnippetComponent {
  title = new FormControl('', [Validators.required]);
  code = new FormControl('', [Validators.required]);
  snippetForm = new FormGroup({ title: this.title, code: this.code });
  save() {
    console.log(this.snippetForm.value);
  }
}
