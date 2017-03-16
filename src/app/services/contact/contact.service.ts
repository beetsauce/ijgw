import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ContactService {

  constructor( private http: Http ) { }

  sendEmail( messageData ) {
    return this.http.post('/api/contact', messageData );
  };

}
