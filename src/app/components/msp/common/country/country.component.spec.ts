import { TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms';
import { MspCountryComponent } from './country.component';
import { MspDataService } from '../../service/msp-data.service';
import { LocalStorageService, LocalStorageModule } from 'angular-2-local-storage';
import {MspProvinceComponent} from "../province/province.component";
import {Ng2CompleterModule} from "ng2-completer";

describe('MspCountryComponent', () => {


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MspCountryComponent],
      imports: [FormsModule, Ng2CompleterModule, LocalStorageModule.withConfig({
        prefix: 'ca.bc.gov.msp',
        storageType: 'sessionStorage'
      })],
      providers: [MspDataService]
    })
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(MspCountryComponent);
    expect(fixture.componentInstance instanceof MspCountryComponent).toBe(true, 'should create MspCountryComponent');

  });

  it ('should have good data', () => {
    let fixture = TestBed.createComponent(MspCountryComponent);
    expect(fixture.componentInstance instanceof MspCountryComponent).toBe(true, 'should create MspCountryComponent');

    for (let country of fixture.componentInstance.countryData) {
      expect(country.name.length).toBeLessThan(26, "country name too long: " + country.name);
    }
  });
});
