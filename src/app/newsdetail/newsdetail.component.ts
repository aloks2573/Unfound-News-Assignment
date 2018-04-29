import { Component, OnInit,Input } from '@angular/core';
import {News } from '../shared/news';

import { NewsService } from '../services/news.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-newsdetail',
  templateUrl: './newsdetail.component.html',
  styleUrls: ['./newsdetail.component.scss']
})
export class NewsdetailComponent implements OnInit {
  @Input()
  news: News;
  constructor(private newsservice: NewsService,
    private route: ActivatedRoute,
    private location: Location) { }

    
  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.news = this.newsservice.getNews(id);
    
  }
  goBack(): void {
    this.location.back();
  }
  
    
}
