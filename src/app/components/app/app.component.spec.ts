import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../../header/header.component';
import { CoursesModule } from '../../courses/courses.module';
import { FooterComponent } from '../../footer/footer.component';
import { LogoComponent } from '../../logo/logo.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../../app.routes';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoursesModule, RouterModule.forRoot(appRoutes)],
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        LogoComponent
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-mentoring-task-one'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-mentoring-task-one');
  });

  it('should render header', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('header')).toBeDefined();
  });
});
