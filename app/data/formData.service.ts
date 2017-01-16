import { Injectable }     from '@angular/core';

import { FormData }       from './formData.model';

@Injectable()
export class FormDataService {

    private formData: FormData = {
            firstName: ''
            ,lastName: ''
            ,email: ''
            ,work: 'Code'
            ,street: ''
            ,city: ''
            ,state: ''
            ,zip: ''
        };
    
    getData(): FormData {
        return this.formData;
    }

    setData(formData: FormData) {
        this.formData = formData;
    }
}