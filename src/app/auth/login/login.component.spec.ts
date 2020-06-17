import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as fromApplicationStore from '../../AppStore/appstore.global';

import { LoginComponent } from './login.component';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { InitialState } from '../Store/auth.store.reducer';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [{ provide: Store, useClass: StoreMock }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class StoreMock {
  // How we did it before
  select = jasmine.createSpy().and.returnValue(of(InitialState));
  dispatch = jasmine.createSpy();
}
