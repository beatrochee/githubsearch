import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
  private username:string;
  private client_id = 'ae83d54de81842631fc6';
  private client_secret = '35d101158c52b1bb8486d5a820df461617a5496e';

  constructor(private _http:Http){
    console.log('Github Service Ready...');
    this.username = 'beatrochee';
  }

  getUser(){
    return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .map(res => res.json());
  }

  getRepos(){
    return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .map(res => res.json());
  }

  updateUser(username:string){
    //TODO: update with observables
    this.username = username;
  }

}
