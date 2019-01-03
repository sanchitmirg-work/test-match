import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  baseUrl: string = environment.url;
  constructor(
    private http: HttpClient
  ) { }

  getPlayers(subpath) {
    return this.http.get(this.baseUrl + subpath);
  }

  addPlayer(player, subpath, id) {
    return this.http.post(this.baseUrl + subpath, player, {
      params: {
        teamId: id
      }
    })
  }

  getTeams(subpath) {
    return this.http.get(this.baseUrl + subpath);
  }
}
