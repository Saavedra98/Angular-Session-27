import { FormsModule } from '@angular/forms';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'session-27'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('session-27');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('session-27');
  });

  it('test Suma, calcular(operacion:string, numero1:string, numero2:string )', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    const mockeData = {operacion:'+', numero1: '2', numero2: '3'};
    const expectedResult = 5;

    const resultado = app.calcular(mockeData.operacion,mockeData.numero1, mockeData.numero2);
    expect(resultado).toEqual(expectedResult);

  });
  
  it('test Resta, calcular(operacion:string, numero1:string, numero2:string )', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    const mockeData = {operacion:'-', numero1: '5', numero2: '3'};
    const expectedResult = 2;

    const resultado = app.calcular(mockeData.operacion,mockeData.numero1, mockeData.numero2);
    expect(resultado).toEqual(expectedResult);

  });
  
  it('test Multiplicacion, calcular(operacion:string, numero1:string, numero2:string )', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    const mockeData = {operacion:'*', numero1: '5', numero2: '3'};
    const expectedResult = 15;

    const resultado = app.calcular(mockeData.operacion,mockeData.numero1, mockeData.numero2);
    expect(resultado).toEqual(expectedResult);

  });
  
  it('test Division, calcular(operacion:string, numero1:string, numero2:string )', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    const mockeData = {operacion:'/', numero1: '10', numero2: '5'};
    const expectedResult = 2;

    const resultado = app.calcular(mockeData.operacion,mockeData.numero1, mockeData.numero2);
    expect(resultado).toEqual(expectedResult);

  });





});
