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
    console.log("Start");

    //Callbak
    this.contryService.GetCountryCallback(contry => {
      console.log(contry);
      this.contryService.GetProvinceCallback(contry, province => {
        console.log(province);
          this.contryService.GetCityCallback(province, city => {
            console.log(city);
          })
      })
    });

    //Promise
    this.contryService.GetCountryAsync()
    .then(contry => {
      console.log(contry);
      return this.contryService.GetProvinceAsync(contry);
    }).then(province => {
      console.log(province);
      return this.contryService.GetCityAsync(province);
    }).then(city => {
      console.log(city);
      console.log("End 1");
    })
    console.log("End 2");

    //Promise with async/await
    var contry = await this.contryService.GetCountryAsync();
    console.log(contry);
    var province = await this.contryService.GetProvinceAsync(contry);
    console.log(province);
    var city = await this.contryService.GetCityAsync(province);
    console.log(city);

    console.log("End");
  }
}
