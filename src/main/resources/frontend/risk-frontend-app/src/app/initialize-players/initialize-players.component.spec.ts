import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitializePlayersComponent } from './initialize-players.component';

describe('InitializePlayersComponent', () => {
  let component: InitializePlayersComponent;
  let fixture: ComponentFixture<InitializePlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitializePlayersComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitializePlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
