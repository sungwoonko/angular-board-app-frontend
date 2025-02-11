import { NgModule } from '@angular/core';
import { ArticlesComponentRoutingModule } from './articles-routing.module';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleDetailComponent  } from './article-detail/article-detail.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    ArticlesComponentRoutingModule,
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [
    ArticlesListComponent,
    ArticleDetailComponent

  ]
})
export class ArticlesModule { }
