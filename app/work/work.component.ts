import { Component, OnInit, Input, OnDestory }   from '@angular/core';

import { FormDataService }     from 'app/data/formData.service'

@Component ({
    selector:     'mt-wizard-work'
    ,templateUrl: 'app/work/work.component.html'
})

export class WorkComponent implements OnInit, OnDestory {
    title = 'What do you do?';
    @Input() formData;
    
    constructor(private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.formData = this.formDataService.getData();
        console.log('Work feature loaded!');
    }

    ngOnDestroy() {
        this.formDataService.setData(this.formData);
    }
}