import { Component, OnInit }   from '@angular/core';

import { Address }             from '../data/formData.model';
import { FormDataService }     from '../data/formData.service';

@Component ({
    selector:     'mt-wizard-address'
    ,templateUrl: 'app/address/address.component.html'
})

export class AddressComponent implements OnInit {
    title = 'Where do you live?';
    address: Address;
    form: any;
    
    constructor(private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.address = this.formDataService.getAddress();
        console.log('Address feature loaded!');
    }

    save(form: any) {
        if (!form.valid) 
            return;
        
        this.formDataService.setAddress(this.address);
    }
}