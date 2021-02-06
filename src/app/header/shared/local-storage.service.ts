import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }
  public setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }
    
  public getItem(key: string){ 
    return localStorage.getItem(key)
  }
  public removeItem(key:string) {
    localStorage.removeItem(key);
  }
  public clear(){
    localStorage.clear(); 
  }
}

//  addBook(newLibraryBook: Librarybook){
//     this.userLibrary.push(newLibraryBook);
//     const test=  this.userLibraryChanged.emit(this.userLibrary);
//     console.log(this.userLibrary);
// }

// getUserLibrary(){
//     return this.userLibrary;
// }










