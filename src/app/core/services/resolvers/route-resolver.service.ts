import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpService} from '../http/http.service';
import {catchError, map, switchMap, take} from 'rxjs/operators';
import {ChannelResponse} from '../../../interfaces/channel-response.interface';
import {Youtuber} from '../../../interfaces/youtuber.interface';
import {ResolveResponse} from '../../../interfaces/resolve-response.interface';
import {Channel} from '../../../interfaces/channel.interface';

@Injectable({
  providedIn: 'root'
})
export class RouteResolverService implements Resolve<ChannelResponse> {

  constructor(private httpService: HttpService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<ResolveResponse> | any {
    return this.httpService.getByChannelName(route.params.search).pipe(take(1), switchMap((channel: ChannelResponse) => {
      if (channel.items.length) {
        // return channel.items[0];
        const channelResponse: ChannelResponse = channel;
        return this.httpService.getByChannelId(channel.items[0].id.channelId).pipe(map((youtuber: Youtuber) => {
          console.log('youtuber');
          const response: ResolveResponse = {channel: channelResponse.items[0], youtuber};
          return response;
        }), catchError(err => {
          return err;
        }));

      } else {
        console.error('not found (hardcoded error message)');
        return 'error';
      }
    }), catchError(err => {
      return err;
    }));
  }
}

/*resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<ChannelResponse> | any {
  return this.httpService.getByChannelName(route.params.search).pipe(take(1), map((channel: ChannelResponse) => {
    if (channel.items.length) {
      return channel.items[0];
    } else {
      console.error('not found (hardcoded error message)');
      return 'error';
    }
  }), catchError(err => {
    return err;
  }));
}*/
