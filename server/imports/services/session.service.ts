

  import { Cache } from './cache.service';
  import { ConfigService } from './config.service';

/*
   SessionCache
*/
  class SessionObjCache extends Cache {
     protected _TTL : number;

     constructor(TTL : number){
       super();
       this._TTL = TTL;
     }

  }
  export const SessionCache = new SessionObjCache(ConfigService.get('session_idle_timeout'));
