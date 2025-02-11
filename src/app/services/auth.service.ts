import { Injectable } from '@angular/core';
import { ApiResponse } from '../models/common/api-response.interface';
import { SignUpRequest } from '../models/auth/sign-up-request.interface';
import { SignInRequest } from '../models/auth/sign-in-request.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api' // auth와 확인 필요

  constructor() { }

  async signUp(signUpData: SignUpRequest): Promise<ApiResponse<void>> {
    try {
      console.log('signUpdata: ',signUpData)
      const response = await fetch(`${this.apiUrl}/users`, {
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

  async signIn(signInData: SignInRequest): Promise<ApiResponse<void>> {
    try {
      console.log('signIndata: ',signInData)
      const response = await fetch(`${this.apiUrl}/auth/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signInData)});
        
      if (!response.ok) {
        const errorText = await response.text();
        console.log(errorText);
        throw new Error(errorText)
      }

      // API 서버의 응답 헤더에서 JWT 토큰을 추출
      const token = response.headers.get('Authorization');
      if (token) {
          localStorage.setItem('jwtToken', token); // 헤더에서 추출한 토큰을 클라이언트 localStorage에 저장
      }

      const data = await response.json();
      return data;
      
    } catch (error) {
      console.error(error);
      throw error
    }
  }
}