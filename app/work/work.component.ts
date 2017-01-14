import { Component, OnInit }   from '@angular/core';

@Component ({
    selector: 'mt-wizard-work'
    ,templateUrl: 'app/work/work.component.html'
})

export class WorkComponent implements OnInit {
    title = 'Work';
    formData = {};
    
    ngOnInit() {
        console.log(this.title + ' loaded!');
    }
}