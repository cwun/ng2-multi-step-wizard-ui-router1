import { Component, OnInit }   from '@angular/core';

import { FormDataService }     from '../data/formData.service';

@Component ({
    selector:     'mt-wizard-work'
    ,templateUrl: 'app/work/work.component.html'
})

export class WorkComponent implements OnInit {
    title = 'What do you do?';
    workType: string;
    form: any;
    
    constructor(private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.workType = this.formDataService.getWork();
        console.log('Work feature loaded!');
    }

    save(form: any) {
        if (!form.valid) 
            return;
        
        this.formDataService.setWork(this.workType);
    }
}