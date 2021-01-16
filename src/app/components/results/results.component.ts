import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Channel} from '../../interfaces/channel.interface';
import {Youtuber} from '../../interfaces/youtuber.interface';
import {HttpService} from '../../core/services/http/http.service';
import {Videos} from '../../interfaces/videos.interface';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  public channel!: Channel;
  public youtuber!: Youtuber;
  public latestVideos!: Videos;
  public iframeLink = 'https://www.youtube.com/embed/';
  public showLoader = false;

  constructor(private activatedRoute: ActivatedRoute, private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      console.log(data);
      this.channel = data.results.channel;
      this.youtuber = data.results.youtuber;
    });
  }

  public getVideosByChannelID(): void {
    this.showLoader = true;
    this.httpService.getVideosByChannelID(this.channel.id.channelId).subscribe(
      (r: Videos) => {
        console.log(r);
        this.latestVideos = r;
        this.showLoader = false;
      },
      (e) => {
        console.log(e);
      }
    );
  }

}
