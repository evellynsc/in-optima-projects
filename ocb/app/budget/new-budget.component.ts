import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import 'rxjs/add/operator/filter';

import { Budget } from './budget';
import { Project } from '../project/project';
import { getBudget } from '../mock-data';
import { getProject } from '../mock-data';
import { ProjectListComponent } from '../project/project-list.component';

const emailValidator = Validators.pattern('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$');



@Component({
  moduleId: module.id,
  selector: 'new-budget',
  templateUrl: 'new-budget.component.html',
})
export class NewBudgetComponent implements OnInit {
  public form: FormGroup;
  public title = new FormControl('', Validators.required);
  public description = new FormControl('', Validators.required);
  public email = new FormControl('', emailValidator);
  public email2 = new FormControl('', emailValidator);
  public breakfast = new FormControl('Continental');
  public toDrink = new FormControl('Tea')
  public month : string;
  public personId: FormControl = new FormControl('');
  public months : string[] = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov"];
  public myDatePickerOptions = {
    todayBtnTxt: 'Hoje',
    dateFormat: 'dd-mm-yyyy',
    firstDayOfWeek: 'su',
    sunHighlight: true,
    height: '34px',
    width: '260px',
    inline: false,
    disableUntil: {year: 2016, month: 8, day: 10},
    selectionTxtFontSize: '16px',
    monthLabels: { 1: 'Jan', 2: 'Fev', 3: 'Mar', 4: 'Abr', 5: 'Mai', 6: 'Jun', 7: 'Jul', 8: 'Aug', 9: 'Set', 10: 'Out', 11: 'Nov', 12: 'Dez'},
    dayLabels: {su: 'Dom', mo: 'Seg', tu: 'Ter', we: 'Qua', th: 'Qui', fr: 'Sex', sa: 'Sab'},

  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  public ngOnInit() {
    this.form = this.fb.group({
      'title':  this.title,
      'description':   this.description,
      'email':      this.email,
      'email2':     this.email2,
      'breakfast':  this.breakfast,
      'toDrink':    this.toDrink,
    });
    // this.form.valueChanges
    //   .map((formValues) => {
    //     formValues.firstName = formValues.firstName.toUpperCase();
    //     return formValues;
    //   })
    //   // .filter((formValues) => this.form.valid)
    //   .subscribe((formValues) => {
    //     console.log(`Model Driven Form valid: ${this.form.valid} value:`, JSON.stringify(formValues));
    //   });
  }

  public onSubmit() {
    console.log(this.form);
  }

  public onDateChanged(event:any) {
    console.log('onDateChanged(): ', event.date, ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
  }
}
