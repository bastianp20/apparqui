import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PvivoPage } from './pvivo.page';

describe('PvivoPage', () => {
  let component: PvivoPage;
  let fixture: ComponentFixture<PvivoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PvivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
