import { Component, NgModule, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';
import { TaskInformation } from '../../Modules/task-information';
import {FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { stringify } from '@angular/core/src/util';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
@NgModule({
  imports: [BrowserModule, HttpClientModule, FormsModule, AngularFontAwesomeModule, ReactiveFormsModule],
  providers: [ HttpClientModule],
  exports: [FormsModule]
})
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})

export class AddTaskComponent implements OnInit {

  public insertResult: any;
  public Task1: string;
  public ParentId: number;
  public StartDate: string;
  public EndDate: string;
  public Priority: number;
  public IsformValid = true;
  public IsAddedSuccessFully = false;
  constructor(private _service: SharedService)  { }

  ngOnInit() {
  }

  AddNewTaskInformation(form: NgForm): void {
  const Taskdetails: TaskInformation = {TaskId: 0,
  ParentID: this.ParentId,
  TaskDescription: this.Task1,
  StartDate: this.StartDate,
  EndDate: this.EndDate,
  Priority: this.Priority,
  IsTaskCompleted: 0};

if (Taskdetails.TaskDescription == undefined || Taskdetails.ParentID == undefined || Taskdetails.StartDate == undefined || Taskdetails.EndDate == undefined) {
  this.IsformValid = false;
} else {
  this.IsformValid = true;
this._service.AddNewTask(Taskdetails).subscribe(data => this.insertResult = data);
this.IsAddedSuccessFully = true;
form.reset();
}

}
ResetTaskForm(form: NgForm): void {
  form.reset();
}


}
