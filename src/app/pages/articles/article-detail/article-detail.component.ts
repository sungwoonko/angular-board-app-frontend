import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleResponse } from 'src/app/models/articles/article-response.interface';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
  standalone: false
})
export class ArticleDetailComponent implements OnInit {
  article: ArticleResponse | undefined;

  constructor(
    private articlesService: ArticlesService,
    private activatedRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    await this.loadArticle();
  }

  loadArticle() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.articlesService.getArticleById(+id).subscribe({
        next: response => {
          if (response.success) {
            this.article = response.data;
          } else {
            console.error(response.message);
          }
        },
        error: err => {
          console.error('Error fetching article:', err);
        },
        complete: () => {
          console.log('Fetching an article request completed.');
        }
      });
    } else {
      console.error('Article ID is null');
    }
  }
}