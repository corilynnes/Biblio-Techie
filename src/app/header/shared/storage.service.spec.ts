  
// import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StorageService } from './storage.service';




describe('StorageService', () => {
  let storageService: StorageService;
 
  beforeEach( () => {
    storageService = new StorageService();
    })
   

    it("should set an item to local storage", () => {
        storageService.setItem("books", "userLibrary");
        expect(localStorage.length).toBeGreaterThanOrEqual(1);
      });
    

      it("should get an item from local storage", () => {
        storageService.setItem("books", "userLibrary");
        expect(storageService.getItem("books")).toContain("userLibrary")
      });
    
  
  
});