import { CommonModule } from '@angular/common';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { initialState } from './../../institute/store/institute.store.reduces';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { LoginComponent } from './login.component';
import { Store, MemoizedSelector } from '@ngrx/store';
import { of } from 'rxjs';
import { InitialState } from '../Store/auth.store.reducer';
import { AppCommonModule } from 'src/app/app-common/app-common.module';
import { AuthRoutingModule } from '../auth-routing.module';
import { MaterialModules } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import * as fromAuthenticationSelector from '../Store/auth.store.index';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('Login Component Tests', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockStore: MockStore;
  let mockUsernameSelector: MemoizedSelector<
    fromAuthenticationSelector.AuthenticationStore,
    boolean
  >;
  let loader: HarnessLoader;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [provideMockStore({ initialState })],
      imports: [
        BrowserAnimationsModule,
        MaterialModules,
        ReactiveFormsModule,
        CommonModule,
        AuthRoutingModule,
        AppCommonModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
    mockUsernameSelector = mockStore.overrideSelector(
      fromAuthenticationSelector.getRequestInProgress,
      false
    );
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain mat card', () => {
    const testElement = fixture.debugElement.query(By.css('mat-card'));
    expect(testElement).toBeTruthy();
  });

  //nativeNode.innerHTML
  it('should contain mat card title', () => {
    const testElement = fixture.debugElement.query(By.css('mat-card-title'));
    expect(
      (testElement.nativeNode.innerHTML = 'User Authentication')
    ).toBeTruthy();
  });
});
