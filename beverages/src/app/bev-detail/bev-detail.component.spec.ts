import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BevDetailComponent } from './bev-detail.component';

describe('BevDetailComponent', () => {
  let component: BevDetailComponent;
  let fixture: ComponentFixture<BevDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BevDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BevDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
