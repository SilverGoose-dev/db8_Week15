import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BevListComponent } from './bev-list.component';

describe('BevListComponent', () => {
  let component: BevListComponent;
  let fixture: ComponentFixture<BevListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BevListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BevListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
