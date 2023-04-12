import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

interface Department {
  value: string;
}

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  myForm!: FormGroup;
  minDate: Date;

  constructor(private fb: FormBuilder) {
    this.minDate = new Date();
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      date: ['', Validators.required],
      jobTitle: ['', Validators.required],
      department: ['', Validators.required],
      managerName: ['', Validators.required],
      managerEmail: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Date', form.value.date)
    console.log('Job Title', form.value.jobTitle)
    console.log('Department', form.value.department)
    console.log('Hiring Manager Name', form.value.managerName)
    console.log('Hiring Manager Email', form.value.managerEmail)
  }

  departments: Department[] = [
    { value: "HR" },
    { value: "Software Development" },
    { value: "Marketing" }
  ]

  title = 'angular-assignment';
}
