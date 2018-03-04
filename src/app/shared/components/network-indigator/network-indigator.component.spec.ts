import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkIndigatorComponent } from './network-indigator.component';

describe('NetworkIndigatorComponent', () => {
  let component: NetworkIndigatorComponent;
  let fixture: ComponentFixture<NetworkIndigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkIndigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkIndigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
