import { TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms';
import { MspAddressComponent } from './address.component';
import { MspDataService } from '../../service/msp-data.service';
import { LocalStorageService, LocalStorageModule } from 'angular-2-local-storage';
import {MspProvinceComponent} from "../province/province.component";
import {Ng2CompleterModule} from "ng2-completer";
import {MspCountryComponent} from "../country/country.component";

describe('MspAddressComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MspAddressComponent, MspProvinceComponent, MspCountryComponent],
      imports: [FormsModule, Ng2CompleterModule, LocalStorageModule.withConfig({
        prefix: 'ca.bc.gov.msp',
        storageType: 'sessionStorage'
      })],
      providers: [MspDataService]
    })
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(MspAddressComponent);
    expect(fixture.componentInstance instanceof MspAddressComponent).toBe(true, 'should create MspAddressComponent');

  });
})
