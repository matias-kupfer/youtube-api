import {Injectable} from '@angular/core';
import {Observable, Subject, Subscription} from 'rxjs';
import {HttpClient, HttpClientModule, HttpEvent, HttpHandler, HttpRequest} from '@angular/common/http';
import {Channel} from '../../../interfaces/channel.interface';
import {DefaultKeys} from '../../../enums/keys.enum';
import {Youtuber} from '../../../interfaces/youtuber.interface';
import {ChannelResponse} from '../../../interfaces/channel-response.interface';
import {finalize} from 'rxjs/operators';
import {LoaderService} from '../loader.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  readonly apiKey: string = DefaultKeys.youtube;

  constructor(private http: HttpClient, private loaderService: LoaderService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show();
    return next.handle(req).pipe(
      finalize(() => this.loaderService.hide()),
    );
  }

  public httpRequest(query: string): Observable<any> {
    return this.http.get(query);
  }

  public getByChannelName(name: string): Observable<ChannelResponse> {
    const query = 'https://content.googleapis.com/youtube/v3/search?part=snippet&type=channel&maxResults=1&q=(' +
      name + ')&key=' + this.apiKey;
    return this.httpRequest(query);
  }

  public getByChannelId(id: string): Observable<Youtuber> {
    const query = 'https://content.googleapis.com/youtube/v3/channels?id=' +
      id + '&part=statistics&key=' + this.apiKey;
    return this.httpRequest(query);
  }

  public getVideosByChannelID(id: string): Observable<any> {
    const query = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey +
      '&channelId=' + id + '&order=date&part=snippet%20&type=video,id&maxResults=3';
    return this.httpRequest(query);
  }


}
