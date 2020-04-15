import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromServiceSelector from '../store/institute.store.selector';
import * as fromServiceAction from '../store/institute.store.actions';
import * as fromServiceState from '../store/institute.store.reduces';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-institute-services',
  templateUrl: './institute-services.component.html',
  styleUrls: ['./institute-services.component.scss']
})
export class InstituteServicesComponent implements OnInit {

  instituteServicesFromGroup: FormGroup;
  isRequestInProgress$: Observable<boolean>;
  constructor(
    private formBuilder: FormBuilder,
    private store$: Store<fromServiceState.InstituteState>
  ) { }


  ngOnInit(): void {
    this.createForm();
    this.isRequestInProgress$ = this.store$.select(fromServiceSelector.GetServiceRequestInProgress);
    this.store$.dispatch(new fromServiceAction.SelectInstituteServices());
    this.store$.select(fromServiceSelector.GetAllInstituteServices).subscribe(data => {
      // console.log('from service selector');
      // TODO: Need to populate the grid with this data
      console.log(data);
    });
  }

  private createForm() {
    console.log('creating from service');
    this.instituteServicesFromGroup = this.formBuilder.group({
      serviceName: [null, Validators.required]
    });
  }

  onSubmitServiceData() {
    this.store$.dispatch(new fromServiceAction.AddInstituteService({ serviceData: this.instituteServicesFromGroup.value }));
  }
}
