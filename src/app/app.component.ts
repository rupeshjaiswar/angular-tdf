import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdf';

  //array of topics to select
  topics = ["Angular", "React", "Vue"];
  topicHasError = true;
  submitted = false;
  errorMsg = '';

  userModel = new User('Rupesh', 'rupesh@test.com', 6383273124, 'default', 'morning', true);

  constructor(private _enrollmentService: EnrollmentService){ }

  validateTopic(value:any){
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit(userForm : any) {

    console.log(userForm);
    // this.submitted = true;
    // this._enrollmentService.enroll(this.userModel)
    // .subscribe(
    //   data => console.log('Success', data),
    //   // error => console.error('Error!', error)
    //   //assigning error status text
    //   error => this.errorMsg = error.statusText
    // );
  }


}
