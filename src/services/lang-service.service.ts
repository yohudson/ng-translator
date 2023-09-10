import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class LangService {
  public language: Subject<any> = new Subject<any>();

  constructor() { 
    this.language.subscribe(lang => {})
  }
}