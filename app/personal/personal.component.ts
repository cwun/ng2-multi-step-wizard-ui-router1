import { Component, OnInit, Input, OnDestory }   from '@angular/core';

import { FormData }       from 'app/data/formData.model';

import { FormDataService }            from 'app/data/formData.service'

@Component ({
    selector:     'mt-wizard-personal'
    ,templateUrl: 'app/personal/personal.component.html'
})

export class PersonalComponent implements OnInit, OnDestroy {
    title = 'Personal';
    @Input() formData: FormData;
    
    constructor(private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.formData = this.formDataService.getData();
        console.log(this.title + ' loaded!');
        console.log(this.formData);
    }

    ngOnDestroy() {
        this.formDataService.setData(this.formData);
        console.log(this.title + ' unloaded!');
    }
}
