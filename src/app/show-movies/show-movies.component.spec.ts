import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMoviesComponent } from './show-movies.component';

describe('ShowMoviesComponent', () => {
  let component: ShowMoviesComponent;
  let fixture: ComponentFixture<ShowMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
