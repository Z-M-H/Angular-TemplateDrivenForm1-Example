import { Component } from '@angular/core';
import {Person} from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-driven-form-app';

  topics: string[] = ["Angular", "Spring Boot", "AWS", "Docker"]

  topicError: boolean = true

  person: Person = new Person('', 22, 'zawmoehtike@gmail.com', "default", 'male', true)

  validateData(data) {
    if(data==='default') {
      this.topicError = true
    } else {
      this.topicError = false
    }
  }

  onSubmit() {
    console.log(this.person)
  }
}
