import { Injectable } from '@angular/core';

import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  SECRET_KEY = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  constructor() { }

  encrypt(message: string) {
    return CryptoJS.AES.encrypt(message, this.SECRET_KEY).toString();
  }

  decrypt(message: string) {
    var bytes = CryptoJS.AES.decrypt(message, this.SECRET_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
}