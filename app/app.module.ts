import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { UIRouterModule }     from "ui-router-ng2";


/* App Root */
import { AppComponent }       from './app.component';

/* Feature Components */
import { PersonalComponent }  from './personal/personal.component';
import { WorkComponent }      from './work/work.component';
import { AddressComponent }   from './address/address.component';
import { ResultComponent }    from './result/result.component';

/* States */
import { UIRouterConfig }   from "./app.router";
import { appStates } from "./app.states";

@NgModule({
    imports:      [ BrowserModule, 
                    UIRouterModule.forRoot({ 
                      states: appStates,
                      useHash: true,
                      configClass: UIRouterConfig
                    }) 
                  ],
    declarations: [ AppComponent, PersonalComponent, WorkComponent, AddressComponent, ResultComponent ],
    bootstrap:    [ AppComponent ]
})

export class AppModule {}