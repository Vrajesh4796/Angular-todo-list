import { Injectable } from '@angular/core';
import { EncryptionService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor(private storageService: EncryptionService) { }

  // Set the json data to local storage
  setJsonValue(key: string, value: any) {
    var str = this.storageService.encrypt(JSON.stringify(value));
    localStorage.setItem(key, str);
    return str;
  }

  // Get the json value from local storage
  getJsonValue(key: string) {
    var str = localStorage.getItem(key) || '';
    return this.storageService.decrypt(str);
  }
}
