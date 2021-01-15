import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLibraryListComponent } from './edit-library-list.component';

describe('EditLibraryListComponent', () => {
  let component: EditLibraryListComponent;
  let fixture: ComponentFixture<EditLibraryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLibraryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLibraryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
