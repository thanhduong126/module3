import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../YoutubeService';

@Component({
  selector: 'app-youtube-playlist',
  templateUrl: './youtube-playlist.component.html',
  styleUrls: ['./youtube-playlist.component.css']
})
export class YoutubePlaylistComponent implements OnInit {

  constructor(public youtubeService: YoutubeService) { }

  ngOnInit() {
  }

}
