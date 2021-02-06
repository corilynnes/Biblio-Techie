  
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibrarianComponent } from './librarian.component';



describe('LibrarianComponent', () => {
  let component: LibrarianComponent;
  let fixture: ComponentFixture<LibrarianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h3 tag', async() => {
    let fixture = TestBed.createComponent(LibrarianComponent);
    fixture.detectChanges();
    let complied = fixture.debugElement.nativeElement;
    expect(complied.querySelector('h3').textContent).toContain('WELCOME TO BIBLIO TECHIE');
  });


  
});