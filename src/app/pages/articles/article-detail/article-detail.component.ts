import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/articles/article-response.interface';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles.service';

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
