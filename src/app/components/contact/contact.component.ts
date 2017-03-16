import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact/contact.service';


@Component({
  selector: 'contactUs',
  templateUrl: './contact.component.html'
})
export class ContactComponent {

  public contactUs = this.fb.group({
    name   : ["", Validators.required],
    email  : ["", Validators.required],
    subject: ["", Validators.required],
    message: ["", Validators.required]
  });

  constructor( public fb: FormBuilder, private contactService: ContactService ) {};

  public sendMessage = function( event ) {

    let formData = this.contactUs.value;
    this.contactService.sendEmail( formData );

  };
}
