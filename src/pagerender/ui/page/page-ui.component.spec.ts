import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUiComponent } from './page-ui.component';

describe('PageUiComponent', () => {
  let component: PageUiComponent;
  let fixture: ComponentFixture<PageUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
