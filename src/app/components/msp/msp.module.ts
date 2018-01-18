import {Injectable, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'

import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AccordionModule, ModalModule} from 'ngx-bootstrap';
import {Ng2CompleterModule} from "ng2-completer";
import {MspComponent} from './msp.component';
import {LandingComponent} from './landing/landing.component';
import {MspConsentModalComponent} from "./common/consent-modal/consent-modal.component";
import {LocalStorageModule} from 'angular-2-local-storage';


const APP_ROUTES : Routes = [
    {
        path: 'msp',
        children: [
            {
                path: '',
                component: LandingComponent
            },

        ]
    },
    {path: '**', redirectTo: '/msp'}
];

/**
 * The overall progress layout is created based on 'msp-prepare-v3-a.jpeg' in
 * https://apps.gcpe.gov.bc.ca/jira/browse/PSPDN-255?filter=16000
 */
@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ModalModule,
        RouterModule.forChild(APP_ROUTES),
        LocalStorageModule.withConfig({
            prefix: 'ca.bc.gov.msp',
            storageType: 'sessionStorage'
        })
    ],
    declarations: [
        // General
        MspComponent,
        LandingComponent,
        MspConsentModalComponent

    ],

    providers: [

    ]
})
@Injectable()
export class MspModule {

}
