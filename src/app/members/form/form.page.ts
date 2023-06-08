import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  formSubmissions: any[] = [];
  name: string='';
  father:string='';
  school:string='';
  age: string='';
  phone: string='';
  height:string=''
  weight:string=''
  palmPaler:string=''
  earWax:string=''
  dental:string=''
  visual:string=''

  counter: number = 0;

  constructor() { }

  ngOnInit() {
   
  }
 


  submitForm() {
    // Store form inputs in local storage
    const formData = {
      name: this.name,
      father: this.father,
      school: this.school,
      age: this.age,
      height: this.height,
      weight: this.weight,
      palmPaler: this.palmPaler,
      earWax: this.earWax,
      dental:this.dental,
      visual:this.visual,
      phone: this.phone
    };


    let counter = localStorage.getItem('formCounter');
    if (!counter) {
      counter = '0';
    }
    const key = `formData-${counter}`;
  
    localStorage.setItem(key, JSON.stringify(formData));
    localStorage.setItem('formCounter', String(Number(counter) + 1));
    console.log(formData);
    // Increment the counter for the next form submission
    this.counter++;

    // Display success message or perform any other actions
    console.log('Form submitted successfully!');
    this.name = '';this.father='';this.school='';this.age='';this.height='';this.weight='';this.palmPaler='';this.earWax='';this.phone='';this.dental='';this.visual='';
  }

}

