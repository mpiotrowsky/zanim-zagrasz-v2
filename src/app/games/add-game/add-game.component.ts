import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss']
})
export class AddGameComponent implements OnInit {
  response;

  title = new FormControl('');
  genre = new FormControl('');

  addGameForm: FormGroup = this.builder.group({
    title: this.title,
    genre: this.genre
  });

  constructor(private builder: FormBuilder,
    private http: HttpClient) { }

  ngOnInit() {
  }

  addGame() {
    this.http.post('', this.addGameForm.value).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log('Error occured');
        console.log(err);
      },
      () => console.log('success')
    );
  }

}
