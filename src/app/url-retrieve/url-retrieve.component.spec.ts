import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlRetrieveComponent } from './url-retrieve.component';

describe('UrlRetrieveComponent', () => {
  let component: UrlRetrieveComponent;
  let fixture: ComponentFixture<UrlRetrieveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlRetrieveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlRetrieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
