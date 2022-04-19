import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';

  products: Product[] = [
        {url:'../../../assets/Images/alex-iby-XhMSz5I1kn8-unsplash.jpg', name: 'BRIONI',  description: 'Brioni vintage inspired black sunglasses', model: 'Model Ref: 60BRI', color: 'silver', price: 320.00 },
        {url:'../../../assets/Images/woman-gc313e4feb_1920.jpg', name: 'BRIONI',  description: 'Brioni square glasses made with acetate and titanium', model: 'Model Ref: 48BRI', color: 'black', price: 490.00 },
        {url:'../../../assets/Images/woman-ga205e16f2_1920.jpg', name: 'BRIONI',  description: 'Brioni titanium silver sunglasses', model: 'Model Ref: 59BRI', color: 'black', price: 460.00 },
        {url:'../../../assets/Images/burlesque-ga37fa2390_1920.jpg', name: 'BURLESQUE',  description: 'Burlesque heartshaped red sunglasses', model: 'Model Ref: 59BRI', color: 'red', price: 460.00 },
        {url:'../../../assets/Images/woman-ga29a8ad14_1920.jpg', name: 'BRIONI',  description: 'Brioni pilot light havana sunglasses', model: 'Model Ref: 53BRI', color: 'silver', price: 3200.00 },
        {url:'../../../assets/Images/woman-gd5276871d_1920.jpg', name: 'BRIONI',  description: 'Brioni rectangular brown and green sunglasses', model: 'Model Ref: 55BRI', color: 'silver', price: 320.00 },
        {url:'../../../assets/Images/luigi-estuye-lucreative-Nb_QBfC6Dfw-unsplash.jpg', name: 'LUIGI',  description: 'Luigi square red glasses', model: 'Model Ref: 55BRI', color: 'red', price: 320.00 },
        {url:'../../../assets/Images/model-gcecd4b72f_1920.jpg', name: 'BRIONI',  description: 'Brioni square vintage black acetate sunglasses', model: 'Model Ref: 56BRI', color: 'black',  price: 350.00 },
        {url:'../../../assets/Images/prince-akachi-4Yv84VgQkRM-unsplash.jpg', name: 'BRIONI',  description: 'Brioni titanium silver grey sunglasses', model: 'Model Ref: 58BRI', color: 'black', price: 460.00 },
        {url:'../../../assets/Images/jonathan-borba-reiwBhNJQS0-unsplash.jpg', name: 'BRIONI',  description: 'Brioni rectangular oversize havana acetate sunglasses', model: 'Model Ref: 54BRI', color: 'black', price: 320.00 },
    ]; 

@Injectable({
  providedIn: 'root'
})
export class ItemService {
 
  getItems(page:number, pageSize:number, filter:Filter): Observable<ItemPayload> {
    let filteredItems:Item[] = mock_items.items.filter(item => 
        { 
          return (
            item.name.indexOf(filter.name) >= 0 
            && 
            (filter.categories.length == 0 || filter.categories.includes(item.category) ) 
          );
        }
      );

    let payload:ItemPayload = {
      items: filteredItems.slice((page-1)*pageSize, page*pageSize),
      count: filteredItems.length
    }
    return of(payload);
  }

  getItem(id:number): Observable<Item>{
    return of(mock_items.items[id-1]);
  }
  
  constructor() { }
}