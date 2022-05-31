import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'NeatTree',
      imageUrl: 'assets/tree.jpeg',
      userName: 'nature',
      content: 'I saw this neat tree today!'
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'assets/mountain.jpeg',
      userName: 'mountainlover',
      content: 'Here is a picture of a snowy mountain!'
    },
    {
      title: 'Biking',
      imageUrl: 'assets/biking.jpeg',
      userName: 'biker',
      content: 'I love biking!'
    },
    {
      title: 'Biking',
      imageUrl: 'assets/biking.jpeg',
      userName: 'biker',
      content: 'I love biking!'
    }
  ];
}
