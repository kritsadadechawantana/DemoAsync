import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }

  ///Basic
  GetCountry(): string{
    this.delay(5000);

    return "Contry data";
  }

  GetProvince(countryId: string): string{
    this.delay(3000);

    return "Province data";
  }

  GetCity(provinceId: string): string{
    this.delay(3000);

    return "City data";
  }

  ///Callback
  GetCountryCallback(callBack: Function){
    this.delay(5000);
    var response = "Contry data";
    callBack(response);
  }

  GetProvinceCallback(countryId: string, callBack: Function){
    this.delay(3000);

    callBack("Province data");
  }

  GetCityCallback(provinceId: string, callBack: Function){
    this.delay(3000);

    callBack("City data");
  }

  ///Promise
  GetCountryAsync(): Promise<string>{
    this.delay(5000);
    return new Promise(function(resolve, reject) {
      resolve("Contry data");
    });
  }

  GetProvinceAsync(countryId: string): Promise<string>{
    this.delay(3000);
    console.log(countryId);
    return new Promise(function(resolve, reject) {
      resolve("Province data");
    });
  }

  GetCityAsync(provinceId: string): Promise<string>{
    this.delay(3000);
    return new Promise(function(resolve, reject) {
      resolve("City data");
    });
  }

  delay(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }
}
