import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        RouterTestingModule
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

  it(`should have as title 'Books'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Books');
  });
 it('it is tha table test cases',()=>{ 
  const fixture = TestBed.createComponent(AppComponent);
  let table = fixture.nativeElement.querySelector('.table')
    expect(table).toBeTruthy();
    let tableRow = fixture.nativeElement.querySelectorAll('tr')
    expect(tableRow[0].cells[0].innerHTML).toBe('ID')
    expect(tableRow[0].cells[1].innerHTML).toBe('BOOK NAME')
    expect(tableRow[0].cells[2].innerHTML).toBe('AUTHOR')
    expect(tableRow[0].cells[3].innerHTML).toBe('PUBLISHER')
    expect(tableRow[0].cells[4].innerHTML).toBe('PUBLISHERAT')

 })
});
function app(app: any) {
  throw new Error('Function not implemented.');
}

