
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StorageService } from '../shared/storage.service';

import { LibraryComponent } from './library.component';
import { Librarybook } from './librarybook.model';



describe('LibraryComponent', () => {
    let storageService: StorageService;
    let component: LibraryComponent;
    let fixture: ComponentFixture<LibraryComponent>;
    let book: Librarybook;
  
    beforeEach(() => {
       let fixture = TestBed.createComponent(LibraryComponent);
       component = fixture.debugElement.componentInstance;
       storageService = new StorageService();
     });

    it ("should create Library component", ()=>{
        expect(component).toBeTruthy();
    });



    // it("should use data from local storage from from the  storage service", () => {
    //     const newLibraryBook = new Librarybook("title", "author", "type", "status")
    //     storageService.setItem("books", JSON.stringify(newLibraryBook));
    //     // const bookData = fixture.debugElement.injector.get(StorageService);
    //     // fixture.detectChanges();
    //     expect(JSON.parse(localStorage.getItem("books"))).toEqual(newLibraryBook);
    //   });
});