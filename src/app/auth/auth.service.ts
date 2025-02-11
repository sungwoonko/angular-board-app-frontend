import { Injectable } from '@angular/core';
import { SignUpRequest } from '../common/sign-up-request.interface';
import { ApiResponse } from '../common/api-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/users' // auth와 확인 필요

  constructor() { }

  async signUp(signUpData: SignUpRequest): Promise<ApiResponse<void>> {
    try {
      console.log('signUpdata: ',signUpData)
      const response = await fetch(`${this.apiUrl}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signUpData)});

      if (!response.ok) {
        const errorText = await response.text();
        console.log(errorText);
        throw new Error(errorText)
      }

      const data = await response.json();
      return data;
      
    } catch (error) {
      console.error(error);
      throw error
    }
  }
}