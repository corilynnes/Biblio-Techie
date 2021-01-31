import { EventEmitter, Injectable } from "@angular/core";


// @Injectable()


export class LibraryListService {
 
 userLibraryChanged = new EventEmitter();
 userLibrary=[{title:'tom'}];



getUserLibrary(){
    return this.userLibrary;
}


addBook(book){
    this.userLibrary.push(book);
    this.userLibraryChanged.emit(this.userLibrary);
}







}
