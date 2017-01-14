import { PersonalComponent }  from './personal/personal.component';
import { WorkComponent }      from './work/work.component';
import { AddressComponent }   from './address/address.component';
import { ResultComponent }    from './result/result.component';

import { Transition }         from "ui-router-ng2";


export const appStates = [
    { name: 'personal', url: '/personal',  component: PersonalComponent },
    { name: 'work', url: '/work',  component: WorkComponent },
    { name: 'address', url: '/address',  component: AddressComponent },
    { name: 'result', url: '/result',  component: ResultComponent }
];
