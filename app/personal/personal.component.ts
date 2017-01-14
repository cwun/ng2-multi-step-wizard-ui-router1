import { Component, OnInit }   from '@angular/core';

@Component ({
    selector: 'mt-wizard-personal'
    ,templateUrl: 'app/personal/personal.component.html'
})

export class PersonalComponent implements OnInit {
    title = 'Personal';
    formData = {};

    ngOnInit() {
        console.log(this.title + ' loaded!');
    }
}
