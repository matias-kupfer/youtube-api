import {Channel} from './channel.interface';
import {Youtuber} from './youtuber.interface';

export interface ResolveResponse {
  channel: Channel;
  youtuber: Youtuber;
}
