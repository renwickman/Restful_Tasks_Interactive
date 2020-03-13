import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient){
   }
getTasks(){
    console.log('hi');
   
    let tempObservable = this._http.get('/tasks');

    return tempObservable;
   }

getTask(id){
  console.log('Id is', id);

   return this._http.get('/tasks/'+id);

}
postToServer(){
//       // use the .post() method of HttpClient
//       // num must be an object
//       // provide the url of your post route - make sure this is set up in your server!
      return this._http.post('/tasks', []);
  
  }
}