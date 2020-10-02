import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserService } from './user.service';
import { CurrentUser, GlobalsService } from './globals.service';
import { CookieService } from 'ngx-cookie';

interface currentUser {
  username: string,
  authdata: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private keyStr: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  private headers: HttpHeaders;

  constructor(
    private _http: HttpClient,
    private userService: UserService,
    private globalsService: GlobalsService,
    private cookieService: CookieService
  ) { }

  public login(username, password, callback) {

    /* Dummy authentication for testing, uses $timeout to simulate api call
     ----------------------------------------------*/
    setTimeout(() => {
      let response;
      this.userService.getByUsername(username)
        .subscribe(user => {
          if (user !== null && user.password === password) {
            response = { success: true };
        } else {
            response = { success: false, message: 'Username or password is incorrect' };
        }
        callback(response);
        });
    }, 1000);

    /* Use this for real authentication
     ----------------------------------------------*/
    // this._http.post('/api/authenticate', { username: username, password: password }, {headers: this.headers})
    // .subscribe(response => callback(response));
  }

  public setCredentials(username, password) {
    const authdata = this.base64encode(username + ':' + password);

    let currentUser: CurrentUser = {
      username: username,
      authdata: authdata
    };
    this.globalsService.setCurrentUser(currentUser);

    // set default auth header for http requests
    this.headers = new HttpHeaders({'Authorization': 'Basic ' + authdata});

    // store user details in globals cookie that keeps user logged in for 1 week (or until they logout)
    let cookieExp = new Date();
    cookieExp.setDate(cookieExp.getDate() + 7);
    const globals = { currentUser: this.globalsService.getCurrentUser()}
    this.cookieService.putObject('globals', globals, { expires: cookieExp });
  }

  public clearCredentials() {
      this.globalsService.setCurrentUser(null);
      this.cookieService.remove('globals');

      if(!this.headers) {
        this.headers = new HttpHeaders();
      }
      this.headers.append('Authorization', 'Basic ');
  }

  private base64encode(input) {
    let output: any = "";
    let chr1: any, chr2: any, chr3: any = "";
    let enc1: any, enc2: any, enc3: any, enc4: any = "";
    let i: number = 0;

    do {
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);

        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
            enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
            enc4 = 64;
        }

        output = output +
            this.keyStr.charAt(enc1) +
            this.keyStr.charAt(enc2) +
            this.keyStr.charAt(enc3) +
            this.keyStr.charAt(enc4);
        chr1 = chr2 = chr3 = "";
        enc1 = enc2 = enc3 = enc4 = "";
    } while (i < input.length);

    return output;
}

private base64decode(input) {
    var output: any = "";
    var chr1: any, chr2: any, chr3: any = "";
    var enc1: any, enc2: any, enc3: any, enc4: any = "";
    var i: number = 0;

    // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
    var base64test = /[^A-Za-z0-9\+\/\=]/g;
    if (base64test.exec(input)) {
        window.alert("There were invalid base64 characters in the input text.\n" +
            "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
            "Expect errors in decoding.");
    }
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    do {
        enc1 = this.keyStr.indexOf(input.charAt(i++));
        enc2 = this.keyStr.indexOf(input.charAt(i++));
        enc3 = this.keyStr.indexOf(input.charAt(i++));
        enc4 = this.keyStr.indexOf(input.charAt(i++));

        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;

        output = output + String.fromCharCode(chr1);

        if (enc3 != 64) {
            output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
            output = output + String.fromCharCode(chr3);
        }

        chr1 = chr2 = chr3 = "";
        enc1 = enc2 = enc3 = enc4 = "";

    } while (i < input.length);

    return output;
}

}
