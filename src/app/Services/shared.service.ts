import { Injectable, NgModule } from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import {Observable} from 'node_modules/rxjs';
import { map } from 'rxjs/operators';
import { TaskInformation } from '../Modules/task-information';

@NgModule({
  providers: [ HttpClient]
})
@Injectable({
  providedIn: 'root'
})
export class SharedService {
private _ApiUrl = 'http://localhost/Tasks/api/Task';
  constructor(private _http: HttpClient) {

   }

  GetAllTask(): Observable<TaskInformation[]> {
    return  this._http.get<TaskInformation[]>(this._ApiUrl).pipe(map(x => x));

  }
  GetTask(TaskId: number): Observable<TaskInformation> {
    return  this._http.get<TaskInformation>(this._ApiUrl + '?TaskId=' + TaskId).pipe(map(x => x));

  }
  AddNewTask(task: TaskInformation): Observable<any> {
    return this._http.post(this._ApiUrl, task)
    .pipe(map(x => x));
  }
  UpdateTask(TaskId: number, task: TaskInformation): Observable<any> {
    return  this._http.put(this._ApiUrl + '/' + TaskId, task).pipe(map(x => x));
  }

  CompleteTaskFlagUpdate(task: TaskInformation): Observable<any> {
    return  this._http.put(this._ApiUrl, task).pipe(map(x => x));
  }
  DeleteTask(TaskId: number): Observable<any> {
    return  this._http.delete(this._ApiUrl + '/' + TaskId).pipe(map(x => x));
  }
}
