import { Component, OnInit }   from '@angular/core';
import { UIROUTER_DIRECTIVES } from "ui-router-ng2";

@Component ({
    selector: 'multi-step-wizard-app'
    ,directives: [UIROUTER_DIRECTIVES]
    ,templateUrl: 'app/app.component.html'
})

export class AppComponent implements OnInit {
    title = 'Create a Profile';
    formData = {};

    ngOnInit() {
        console.log(this.title + ' loaded!');
    }
}