import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

@Injectable()
export class PromotionService {

  constructor() { }

  getPromotions(): Promise<Promotion[]>{
    return new Promise(resolve => {
      //simulate server latency with 2 sec delay
      setTimeout(() => resolve(PROMOTIONS), 2000);
    });
  }

  getPromotion(id: number): Promise<Promotion> {
    return new Promise(resolve => {
      //simulate server latency with 2 sec delay
      setTimeout(() => resolve(PROMOTIONS.filter((promo) => (promo.id === id))[0]), 2000);
    });
  }

  getFeaturedDish(): Promise<Promotion> {
    return new Promise(resolve => {
      //simulate server latency with 2 sec delay
      setTimeout(() => resolve(PROMOTIONS.filter((promo) => (promo.featured))[0]), 2000);
    });
  }

}
