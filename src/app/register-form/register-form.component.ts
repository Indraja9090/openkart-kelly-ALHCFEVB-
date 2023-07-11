import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

  @ViewChild('emailReference') emailRef: ElementRef;
  @ViewChild('passwordReference') passwordRef: ElementRef;
  @ViewChild('mobileReference') mobileRef: ElementRef;

  onRegister(nameRef: HTMLInputElement){
    console.log('Register button clicked');
    console.log('Entered Name is::',nameRef.value);
    console.log('Entered Email is::',this.emailRef.nativeElement.value);
    console.log('Entered Password is::',this.passwordRef.nativeElement.value);
    console.log('Entered Mobile is::',this.mobileRef.nativeElement.value);
  }

}
