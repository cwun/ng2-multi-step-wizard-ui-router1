import { Component, OnInit }   from '@angular/core';

@Component ({
    selector: 'mt-wizard-address'
    ,templateUrl: 'app/address/address.component.html'
})

export class AddressComponent implements OnInit {
    title = 'Address';
    formData = {};

    ngOnInit() {
        console.log(this.title + ' loaded!');
    }
}
