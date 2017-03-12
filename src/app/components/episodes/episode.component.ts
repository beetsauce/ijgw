import { Component } from '@angular/core';

@Component({
  selector: 'episodelist',
  templateUrl: './episode.component.html'
})
export class EpisodeListComponent {

  epsisodes = [
    {
      "id": 1,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "title": "Turtlenecks in the City",
      "location": "../../assets/episodes/sample1.mp3",
      "image": "../../assets/img/47825525-random-image.jpg",
      "date": new Date( "2-20-17" )
    },
    {
      "id": 2,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "title": "DeLapp-idated",
      "location": "../../assets/episodes/sample2.mp3",
      "image": "../../assets/img/home-cat.jpg",
      "date": new Date( "2-13-17" )
    },
    {
      "id": 3,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "title": "Beets Me",
      "location": "../../assets/episodes/sample3.mp3",
      "image": "../../assets/img/4424762_orig.jpg",
      "date": new Date( "2-6-17" )
    }
  ];
}
