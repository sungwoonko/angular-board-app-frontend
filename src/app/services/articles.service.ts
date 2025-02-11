import { Injectable } from '@angular/core';
import { ApiResponse } from '../models/common/api-response.interface';
import { Article } from '../models/articles/article-response.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private apiUrl = 'http://localhost:3000/api/articles'

  constructor(private http: HttpClient){ }

  getAllArticles(): Observable<ApiResponse<Article[]>>{
    return this.http.get<ApiResponse<Article[]>>(`${this.apiUrl}`)
  }



  // async getAllArticles(): Promise<ApiResponse<Article[]>> {
  //   try {
  //     const response = await fetch(`${this.apiUrl}`);

  //     if(!response.ok){
  //       throw new Error('Network response was not ok');
  //     }
  //     const data: ApiResponse<Article[]> = await response.json();
  //     return data;    
  //   } catch (error) {
  //     console.error('Fetch error',error)
  //     throw error;
  //   }

  // }

  async getArticleById(id: number): Promise<ApiResponse<Article>>{
    try {
      const response = await fetch(`${this.apiUrl}/${id}`);

      if(!response.ok){
        throw new Error('Network response was not ok');
      }
      const data: ApiResponse<Article> = await response.json();
      return data;
    } catch (error) {
      console.error('Fetch error',error)
      throw error;
    }

  }
}
