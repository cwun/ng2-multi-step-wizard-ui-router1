import { Component, OnInit, Input, OnDestroy }   from '@angular/core';

import { FormDataService }                       from '../data/formData.service';

@Component ({
    selector:     'mt-wizard-address'
    ,templateUrl: 'app/address/address.component.html'
})

export class AddressComponent implements OnInit, OnDestroy {
    title = 'Where do you live?';
    @Input() formData;
    
    constructor(private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.formData = this.formDataService.getData();
        console.log('Address feature loaded!');
    }

    ngOnDestroy() {
        this.formDataService.setData(this.formData);
    }
}