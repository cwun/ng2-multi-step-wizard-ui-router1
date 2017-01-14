import { Component, OnInit }   from '@angular/core';

@Component ({
    selector: 'mt-wizard-result'
    ,templateUrl: 'app/result/result.component.html'
})

export class ResultComponent implements OnInit {
    title = 'Result';
    formData = {};

    ngOnInit() {
        console.log(this.title + ' loaded!');
    }
}
