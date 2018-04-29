import { Component, OnInit } from '@angular/core';
import {News } from '../shared/news';
import { NewsService } from '../services/news.service'
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

 newses:News[];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newses = this.newsService.getNewses();
  }
 
}
