import { TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AssistanceComponent } from './assistance.component';
import { MspDataService } from '../service/msp-data.service';
import { LocalStorageService, LocalStorageModule } from 'angular-2-local-storage';
import {MspProgressBarComponent} from "../common/progressBar/progressBar.component";
import { RouterModule } from '@angular/router';
import {RouterTestingModule} from "@angular/router/testing";
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProcessService } from "../service/process.service";
import {MspLogService} from "../service/log.service";

describe('AssistanceComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssistanceComponent, MspProgressBarComponent],
      imports: [FormsModule, RouterTestingModule, HttpModule, RouterModule, LocalStorageModule.withConfig({
        prefix: 'ca.bc.gov.msp',
        storageType: 'sessionStorage'
      })],
      providers: [MspDataService, ProcessService,MspLogService
        
        
      ]
    })
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(AssistanceComponent);
    expect(fixture.componentInstance instanceof AssistanceComponent).toBe(true, 'should create AssistanceComponent');

  });
})
