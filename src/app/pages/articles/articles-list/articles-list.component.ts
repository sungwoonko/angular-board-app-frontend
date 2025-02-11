import { Component, OnInit } from '@angular/core';
import { ArticleResponse } from 'src/app/models/articles/article-response.interface';
import { Router } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
  standalone: false
})
export class ArticlesListComponent implements OnInit {
  articles: ArticleResponse[] = [];

  constructor(
    private articlesService: ArticlesService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.articlesService.getAllArticles().subscribe({
      next: response => {
        if (response.success) {
          this.articles = response.data;
        } else {
          console.error(response.message);
        }
      },
      error: err => {
        console.error('Error fetching articles:', err);
      },
      complete: () => {
        console.log('Fetching articles request completed.');
      }
    });
  }

  // route Article detail page
  viewArticle(id: number) {
    this.router.navigate([`/articles/${id}/detail`]);
  }
}