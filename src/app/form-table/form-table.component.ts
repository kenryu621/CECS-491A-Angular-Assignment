import { Component } from '@angular/core';

export interface FormInput {
  subNo: number;
  date: string;
  jobTitle: string;
  managerName: string;
  managerEmail: string;
}

const FormData: FormInput[] = [
  { subNo: 1, date: new Date().toLocaleDateString(), jobTitle: "Tester", managerName: "Kenry Yu", managerEmail: "kenryu422@outlook.com" },
];

@Component({
  selector: 'app-form-table',
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.css']
})
export class FormTableComponent {
  displayedColumns: string[] = ['subNo', 'date', 'jobTitle', 'managerName', 'managerEmail'];
  formDataArray = FormData;
}
