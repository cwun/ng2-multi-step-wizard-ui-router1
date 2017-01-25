import { Component, OnInit, Input, OnDestory }   from '@angular/core';

import { FormData }                              from 'app/data/formData.model';
import { FormDataService }                       from 'app/data/formData.service'

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
