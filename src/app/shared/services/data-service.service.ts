import { Injectable } from '@angular/core';
// * first step
import ProductData from '../JSONData/ProductData.json' 

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  // * 2nd Step
  DummyData = ProductData;

  constructor() { }

  // * 3rd Step
  GetProductData(){
    return this.DummyData;
  }
}