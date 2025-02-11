import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/common/article-response.interface';
import { ArticlesService } from '../articles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
  standalone: false
})
export class ArticleDetailComponent implements OnInit {
  article: Article | undefined;

  constructor(
    private articlesService: ArticlesService,
    private activatedRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    await this.loadArticle();
  }

  async loadArticle() {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    if(id) {
      try {
        const response = await this.articlesService.getArticleById(+id);
        this.article = response.data; 
      } catch (error) {
        console.error('Fetch error:', error);
      }
    }else{
      console.error('Article id is null');
    }
  }

}
