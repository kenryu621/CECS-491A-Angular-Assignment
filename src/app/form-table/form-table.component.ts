import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { FormInput } from '../reactive-form/reactive-form.component';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-form-table',
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.css'],
})
export class FormTableComponent implements OnChanges {
  @Input() FormDataFromParent!: FormInput;
  formDataArray: FormInput[] = [];
  cols: string[] = ['subNo', 'date', 'jobTitle', 'department', 'managerName', 'managerEmail'];

  ngOnChanges(changes: SimpleChanges) {
    if (!changes['FormDataFromParent'].isFirstChange()) {
      this.formDataArray.push(this.FormDataFromParent);
      this.my_table.renderRows();
    }
  }
  @ViewChild('form_table') my_table!: MatTable<any>;
}