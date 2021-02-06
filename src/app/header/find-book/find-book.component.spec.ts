  
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FindBookComponent } from './find-book.component';



describe('FindBookComponent', () => {
  let component: FindBookComponent;
  let fixture: ComponentFixture<FindBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should render title in a h3 tag', async() => {
//     let fixture = TestBed.createComponent(FindBookComponent);
//     fixture.detectChanges();
//     let complied = fixture.debugElement.nativeElement;
//     expect(complied.querySelector('h3').textContent).toContain('NEW YORK TIMES CURRENT BEST SELLERS');
//   });


  
});