
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';



describe('HomeComponent', () => {

  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    imports: [FormsModule];
    let fixture = TestBed.createComponent(HomeComponent);
    component = fixture.debugElement.componentInstance;

  });


});