import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { YoutubeService } from '../YoutubeService';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnInit {

  song: any;
  sub: Subscription;
  constructor(
      private youtubeService: YoutubeService,
  private activatedRouter: ActivatedRoute,
  private domSanitizer: DomSanitizer
) { }

ngOnInit() {
  this.sub = this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.song = this.youtubeService.find(id);
  });
}

getSrc() {
  const url = 'https://www.youtube.com/embed/' + this.song.id;
  return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
}

ngOnDestroy() {
  this.sub.unsubscribe();
}

}
