import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2CommnonComponent } from './ng2-common.component';

describe('Ng2CommnonComponent', () => {
  let component: Ng2CommnonComponent;
  let fixture: ComponentFixture<Ng2CommnonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2CommnonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2CommnonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
