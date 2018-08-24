import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  game = {
    title: 'title',
    category: 'category',
    cover: 'cover',
    desc: 'desc'
  };

  games = [
    {
      title: 'Morrowind',
      category: 'RPG',
      cover: 'https://1.fwcdn.pl/po/84/37/608437/7703966.3.jpg',
      desc: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
    },
    {
      title: 'Oblivion',
      category: 'RPG',
      cover: 'https://static.raru.co.za/cover/2015/07/30/2903058-l.jpg?v=1438265570',
      desc: 'A small, agile dog that copes, very well with mountainous terrain the Shiba Inu was originally bred for hunting.'
    },
    {
      title: 'Skyrim',
      category: 'RPG',
      cover: 'https://static.raru.co.za/cover/2016/06/13/4771056-l.jpg?v=1465896232',
      desc: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
    },
    {
      title: 'Dark Souls',
      category: 'RPG',
      cover: 'https://vignette.wikia.nocookie.net/darksouls/images/8/8d/Dark_Souls_Cover_Art.jpg/revision/latest?cb=20110807120720',
      desc: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
    },
    {
      title: 'Dark Souls II',
      category: 'RPG',
      cover: 'https://s2.gaming-cdn.com/images/products/697/271x377/697.jpg',
      desc: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
    },
    {
      title: 'Dark Souls III',
      category: 'RPG',
      cover: 'https://images.g2a.com/newlayout/323x433/1x1x0/e2c53cfecd46/5912ecd65bafe3d94049a98b',
      desc: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
