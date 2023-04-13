import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

interface Department {
  value: string;
}

export interface FormInput {
  subNo: number;
  date: string;
  jobTitle: string;
  department: string;
  managerName: string;
  managerEmail: string;
}

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  my_react_form!: FormGroup;
  minDate: Date;
  submissionNumber = 0;
  FormData!: FormInput;

  constructor(private fb: FormBuilder) {
    this.minDate = new Date();
  }

  ngOnInit() {
    this.my_react_form = this.fb.group({
      date: ['', Validators.required],
      jobTitle: ['', Validators.required],
      department: ['', Validators.required],
      managerName: ['', Validators.required],
      managerEmail: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(form: FormGroup) {
    this.FormData = { subNo: ++this.submissionNumber, date: form.value.date.toLocaleDateString(), jobTitle: form.value.jobTitle, department: form.value.department, managerName: form.value.managerName, managerEmail: form.value.managerEmail };
  }

  departments: Department[] = [
    { value: "HR" },
    { value: "Software Development" },
    { value: "Marketing" }
  ]

  title = 'angular-assignment';
}
