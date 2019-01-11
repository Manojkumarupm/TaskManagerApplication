import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import { UpdateTaskComponent } from './update-task.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AppRoutingModule } from '../../app-routing.module';
describe('UpdateTaskComponent', () => {
  let component: UpdateTaskComponent;
  let fixture: ComponentFixture<UpdateTaskComponent>;
  const fakeActivatedRoute = {
    snapshot: { data: {} }
};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTaskComponent ],
      imports: [
        FormsModule,
        HttpClientModule,
        AppRoutingModule
      ],
      providers: [ HttpClientModule, { provide: ActivatedRoute, useClass: fakeActivatedRoute } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //  expect(component).toBeTruthy();
  // });
});
