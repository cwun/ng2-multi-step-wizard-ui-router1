import { Component, OnInit, Input }   from '@angular/core';
import { UIROUTER_DIRECTIVES }        from "ui-router-ng2";


import { FormDataService }            from 'app/data/formData.service'

@Component ({
    selector:     'multi-step-wizard-app'
    ,directives:  [ UIROUTER_DIRECTIVES ]
    ,templateUrl: 'app/app.component.html'
})

export class AppComponent implements OnInit {
    title = 'Create a Profile';
    @Input() formData;
    
    constructor(private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.formData = this.formDataService.getData();
        console.log(this.title + ' loaded!');
        console.log(this.formData);
    }
}