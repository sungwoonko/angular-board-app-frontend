import { NgModule } from '@angular/core';
import { ArticlesPageRoutingModule } from './articles-routing.module';
import { ArticlesListPage } from './articles-list/articles-list.page';
import { ArticleDetailPage } from './article-detail/article-detail.page';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    ArticlesPageRoutingModule,
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [
    ArticlesListPage,
    ArticleDetailPage

  ]
})
export class ArticlesModule { }
