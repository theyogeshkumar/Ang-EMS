import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }
  loggingCrudMessage(crudOperationName: string){
    console.log(new Date() + ": " + JSON.stringify(crudOperationName));
  }
}
