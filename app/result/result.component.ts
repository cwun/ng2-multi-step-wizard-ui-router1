import { Component, OnInit, Input }   from '@angular/core';
import { Subscription }        from 'rxjs/Subscription';

import { FormDataService }     from 'app/data/formData.service'

@Component ({
    selector:     'mt-wizard-result'
    ,templateUrl: 'app/result/result.component.html'
})

export class ResultComponent implements OnInit {
    title = 'Result';
    @Input() formData;
    
    constructor(private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.formData = this.formDataService.getData();
        console.log(this.title + ' loaded!');
        console.log(this.formData);
    }
}
