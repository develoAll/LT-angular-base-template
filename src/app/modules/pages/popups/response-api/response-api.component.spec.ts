import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseApiComponent } from './response-api.component';

describe('ResponseApiComponent', () => {
  let component: ResponseApiComponent;
  let fixture: ComponentFixture<ResponseApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponseApiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResponseApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
