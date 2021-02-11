import { TitleCasePipe } from "@angular/common";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeaderComponent } from "./header.component";





describe('HeaderCompnent', () => {

    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;
    const pipe = new TitleCasePipe();

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HeaderComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create Header component', () => {
        let fixture = TestBed.createComponent(HeaderComponent);
        let app = fixture.debugElement.componentInstance;

        expect(app).toBeTruthy();
    });

    it('should render Page Title in a h3 tag', async() => {
        let fixture = TestBed.createComponent(HeaderComponent);
        fixture.detectChanges();
        let complied = fixture.debugElement.nativeElement;
        expect(complied.querySelector('a').textContent).toContain('BIBLIO TECHIE');
      });

      it('titlecase pipe transforms "abc" to "Abc"', () => {
        expect(pipe.transform('abc')).toBe('Abc');
      });
    
      it('titlecase pipe transforms "abc def" to "Abc Def"', () => {
        expect(pipe.transform('abc def')).toBe('Abc Def');
      });

});
