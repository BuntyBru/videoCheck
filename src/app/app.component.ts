import { Component } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';

export interface PeriodicElement {
  name: string;
  position: number;
  points: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Robert', points: 1.0079},
  {position: 2, name: 'De', points: 4.0026},
  {position: 3, name: 'Niro', points: 6.941}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'tables';
  youtubeUrl:string='https://www.youtube.com/watch?v=Run4JZs4Qc8';
  youtubeId = 'Run4JZs4Qc8';
  displayedColumns: string[] = ['position', 'name', 'points'];

  dataSource = ELEMENT_DATA;
  constructor(private embedService: EmbedVideoService)
  {
    console.log(this.embedService.embed_youtube(this.youtubeId));
  }


}
