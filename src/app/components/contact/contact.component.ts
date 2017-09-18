/**
 * Created by vhe on 8/9/2017.
 */
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'contact',
    templateUrl: './contact.html',
    styleUrls: ['./contact.less']
})

export class ContactComponent {

    contactForm = new FormGroup({
        name: new FormControl(),
        email: new FormControl(),
        tel: new FormControl(),
        message: new FormControl()
    });

    constructor() { }

    stringify(obj) {
        return JSON.stringify(obj);
    }

    contact = {};

    submit() {
        console.log(this.contactForm.value);
    }
}
