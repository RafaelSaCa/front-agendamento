import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAgendamentoComponent } from './cadastro-agendamento.component';

describe('CadastroAgendamentoComponent', () => {
  let component: CadastroAgendamentoComponent;
  let fixture: ComponentFixture<CadastroAgendamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroAgendamentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
