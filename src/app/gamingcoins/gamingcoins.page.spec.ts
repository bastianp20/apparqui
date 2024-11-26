import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GamingcoinsPage } from './gamingcoins.page';

describe('GamingcoinsPage', () => {
  let component: GamingcoinsPage;
  let fixture: ComponentFixture<GamingcoinsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GamingcoinsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
