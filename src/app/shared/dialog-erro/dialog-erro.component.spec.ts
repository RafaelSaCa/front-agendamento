import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogErroComponent } from './dialog-erro.component';

describe('DialogErroComponent', () => {
  let component: DialogErroComponent;
  let fixture: ComponentFixture<DialogErroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogErroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogErroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
