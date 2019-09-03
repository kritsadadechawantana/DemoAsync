import { Component } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public contryService: CountryService) {
    
  }

  async Run()
  {
    console.log(this.contryService.GetCountry());
  }
}
