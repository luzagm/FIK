import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shop-content',
  templateUrl: './shop-content.component.html',
  styleUrls: ['./shop-content.component.scss']
})

export class ShopContentComponent implements OnInit {

    products: Product[] = [];

    constructor() { }

    ngOnInit(): void {

    this.products = [
            {url:'../../../assets/Images/alex-iby-XhMSz5I1kn8-unsplash.jpg', name: 'BRIONI',  description: 'Brioni vintage inspired black sunglasses', model: 'Model Ref: 60BRI', price: 320.00 },
            {url:'../../../assets/Images/woman-gc313e4feb_1920.jpg', name: 'BRIONI',  description: 'Brioni square glasses made with acetate and titanium', model: 'Model Ref: 48BRI', price: 490.00 },
            {url:'../../../assets/Images/woman-ga205e16f2_1920.jpg', name: 'BRIONI',  description: 'Brioni titanium silver sunglasses', model: 'Model Ref: 59BRI', price: 460.00 },
            {url:'../../../assets/Images/woman-ga29a8ad14_1920.jpg', name: 'BRIONI',  description: 'Brioni pilot light havana sunglasses', model: 'Model Ref: 53BRI', price: 3200.00 },
            {url:'../../../assets/Images/alex-iby-XhMSz5I1kn8-unsplash.jpg', name: 'BRIONI',  description: 'Brioni rectangular brown and green sunglasses', model: 'Model Ref: 55BRI', price: 320.00 },
            {url:'../../../assets/Images/model-gcecd4b72f_1920.jpg', name: 'BRIONI',  description: 'Brioni square vintage black acetate sunglasses', model: 'Model Ref: 56BRI', price: 350.00 },
            {url:'../../../assets/Images/prince-akachi-4Yv84VgQkRM-unsplash.jpg', name: 'BRIONI',  description: 'Brioni titanium silver grey sunglasses', model: 'Model Ref: 58BRI', price: 460.00 },
            {url:'../../../assets/Images/jonathan-borba-reiwBhNJQS0-unsplash.jpg', name: 'BRIONI',  description: 'Brioni rectangular oversize havana acetate sunglasses', model: 'Model Ref: 54BRI', price: 320.00 },
        ];
  }

}

interface Product {
    url: string,
    name: string,
    description: string,
    model: string,
    price: number,
};