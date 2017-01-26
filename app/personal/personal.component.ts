import { Component, OnInit, Input, OnDestroy }   from '@angular/core';

import { FormData }                              from '../data/formData.model';
import { FormDataService }                       from '../data/formData.service';

@Component ({
    selector:     'mt-wizard-personal'
    ,templateUrl: 'app/personal/personal.component.html'
})

export class PersonalComponent implements OnInit, OnDestroy {
    title = 'Please tell us about yourself.';
    @Input() formData: FormData;
    
    constructor(private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.formData = this.formDataService.getData();
        console.log('Personal feature loaded!');
    }

    ngOnDestroy() {
        this.formDataService.setData(this.formData);
    }
}
