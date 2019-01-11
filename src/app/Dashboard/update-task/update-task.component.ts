import { Component, OnInit, NgModule } from '@angular/core';
import { TaskInformation } from '../../Modules/task-information';
import { SharedService } from 'src/app/Services/shared.service';
import { FormsModule, NgForm } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
@NgModule({
  imports: [BrowserModule, FormsModule, AngularFontAwesomeModule],
  providers: [ActivatedRoute]
})
@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.scss']
})
export class UpdateTaskComponent implements OnInit {
  public updateResult: any;
  public TaskId: number;
  public TaskDescription: string;
  public ParentID: number;
  public StartDate: string;
  public EndDate: string;
  public Priority: number;

  public IsformValid = true;
  public IsUpdatedSuccessFully = false;


  constructor(private _service: SharedService, private route: ActivatedRoute) {

    const id = this.route.snapshot.paramMap.get('taskid');
    this._service.GetTask(parseInt(id)).subscribe(data => {
      this.TaskId = data.TaskId;
      this.TaskDescription = data.TaskDescription;
      this.Priority = data.Priority;
      this.StartDate = data.StartDate;
      this.EndDate = data.EndDate;
      this.ParentID = data.ParentID;
    });
  }

  ngOnInit() {
  }

  UpdateTask(): void {
    const Taskdetails: TaskInformation = {
      TaskId: this.TaskId,
      ParentID: this.ParentID,
      TaskDescription: this.TaskDescription,
      StartDate: this.StartDate,
      EndDate: this.EndDate,
      Priority: this.Priority,
      IsTaskCompleted: 0
    };

    if (Taskdetails.TaskDescription == undefined || Taskdetails.StartDate == undefined || Taskdetails.EndDate == undefined) {
      this.IsformValid = false;
    } else {
      this.IsformValid = true;
      this._service.UpdateTask(Taskdetails.TaskId, Taskdetails).subscribe(data => this.updateResult = data);
      this.IsUpdatedSuccessFully = true;

    }

  }
}
