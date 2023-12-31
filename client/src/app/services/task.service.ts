import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskServices {

 constructor(private http:HttpClient) { }


  CreateFn(task: Task):Observable<any> {
    return this.http.post<any>('http://localhost:5000/api/task/create',task);
  }

 getAllTasksFn():Observable<any> {
   return this.http.get<any>('http://localhost:5000/api/task/all',);
 }

 getOneTaskFn(id: string):Observable<any> {
  return this.http.get<any>(`http://localhost:5000/api/task/single/${id}`);
 }

 updateTaskFn(id: string,task: Task):Observable<any> {
  return this.http.put<any>(`http://localhost:5000/api/task/update/${id}`,task);
 }

 DeleteTaskFn(id: string):Observable<any> {
  return this.http.delete<any>(`http://localhost:5000/api/task/delete/${id}`);
 }
}

export { Task };

