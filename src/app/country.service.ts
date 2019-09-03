import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }

  ///Basic
  GetCountry(): string{
    this.delay(5000);
    return "Get all country...";
  }

  GetProvince(countryId: string): string{
    this.delay(3000);
    return "Get provine by countryId:"+ countryId;
  }

  GetCity(provinceId: string): string{
    this.delay(3000);
    return "Get city by provinceId:"+ provinceId;
  }


  ///Callback
  GetCountryCallback(callBack: Function){
    this.delay(5000);
    callBack("Get all country...");
  }

  GetProvinceCallback(countryId: string, callBack: Function){
    this.delay(3000);
    callBack("Get provine by countryId:"+ countryId);
  }

  GetCityCallback(provinceId: string, callBack: Function){
    this.delay(3000);
    callBack("Get city by provinceId:"+ provinceId);
  }

  ///Promise
  GetCountryAsync(): Promise<string>{
    return new Promise(function(resolve, reject) {
      this.delay(5000);
      resolve("Get all country...");
    });
  }

  GetProvinceAsync(countryId: string): Promise<string>{
    return new Promise(function(resolve, reject) {
      this.delay(3000);
      resolve("Get provine by countryId:"+ countryId);
    });
  }

  GetCityAsync(provinceId: string, callBack: Function){
    return new Promise(function(resolve, reject) {
      this.delay(3000);
      resolve("Get city by provinceId:"+ provinceId);
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
