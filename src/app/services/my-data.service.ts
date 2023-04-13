import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MyDataService {

  baseURL: string = "https://wo-fifa.azurewebsites.net/equipos";

  public search = new BehaviorSubject<string>("");
 
  constructor(private http: HttpClient) { }

 getData(limit: number, offset: number){
  debugger;
  return this.http.get(`${this.baseURL}/listar/${offset}/${limit}`);
 }

 createData(data:{}){
  debugger;
  const headers = { 'content-type': 'application/json'}  
  const body=JSON.stringify(data);
  return this.http.post(`${this.baseURL}/crear`, body, {'headers':headers});
 }

 updateData(id: number, data:{}){
  debugger;
  const headers = { 'content-type': 'application/json'}  
  const body=JSON.stringify(data);
  return this.http.put(`${this.baseURL}/actualizar/${id}`, body, {'headers':headers});
 }

 deleteData(id: number){
  debugger;
  return this.http.delete(`${this.baseURL}/eliminar/${id}`);
 }

 getDataByID(id: number){
  debugger;
  return this.http.get(`${this.baseURL}/consultar/${id}`);
 }

 getDataByDate(start: String, end: String){
  debugger;
  return this.http.get(`${this.baseURL}/consultar/${start}/${end}/`);
 }

 login(user: any){
  debugger;
  return this.http.post("https://wo-fifa.azurewebsites.net/login", user);
 }

 logout(user: any){
  debugger;
  return this.http.post(`https://wo-fifa.azurewebsites.net/logout`, user);
 }


}