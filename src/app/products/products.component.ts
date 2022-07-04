import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../shared/services/data-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  // * 5th Step
  ProductsDataArray:any = [];

  constructor(
  // * 4th Step
    private _DataService: DataServiceService
  ) { }

  ngOnInit(): void {
    // * 7th Step
    this.GetDataFromServiceFile();
  }

  // * 6th Step
  GetDataFromServiceFile(){
    this.ProductsDataArray = this._DataService.GetProductData();
  }

}
