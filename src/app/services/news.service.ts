import { Injectable } from '@angular/core';
import { News } from '../shared/news';
import { NEWS } from '../shared/newss';
@Injectable()
export class NewsService {

  constructor() { }
  getNewses(): News[] {
    return NEWS;
  }
  getNews(id: number): News {
    
    return NEWS.filter((x) => (x.id === id))[0];
  }

}
