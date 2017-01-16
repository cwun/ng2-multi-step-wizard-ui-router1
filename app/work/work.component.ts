import { Component, OnInit, Input, OnDestory }   from '@angular/core';

import { FormDataService }     from 'app/data/formData.service'

@Component ({
    selector:     'mt-wizard-work'
    ,templateUrl: 'app/work/work.component.html'
})

export class WorkComponent implements OnInit, OnDestory {
    title = 'Work';
    @Input() formData;
    
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