import { Component, OnInit }   from '@angular/core';

import { Personal }            from '../data/formData.model';
import { FormDataService }     from '../data/formData.service';

@Component ({
    selector:     'mt-wizard-personal'
    ,templateUrl: 'app/personal/personal.component.html'
})

export class PersonalComponent implements OnInit {
    title = 'Please tell us about yourself.';
    personal: Personal;
    form: any;
    
    constructor(private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.personal = this.formDataService.getPersonal();
        console.log('Personal feature loaded!');
    }

    save(form: any) {
        if (!form.valid) 
            return;
        
        this.formDataService.setPersonal(this.personal);
    }
}
