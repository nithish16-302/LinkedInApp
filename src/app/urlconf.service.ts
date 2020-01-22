import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlconfService {
  url = 'http://192.168.0.189:8080/';
  userId: string;
  constructor() { }
}
