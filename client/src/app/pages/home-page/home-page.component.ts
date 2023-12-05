import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from 'src/app/interfaces/task';
import { TaskServices } from 'src/app/services/task.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
 
  tasks: Task[] = [];

  AddForm = new FormGroup({
    option: new FormControl(''),
    name: new FormControl(''),
    time: new FormControl(''),
    date: new FormControl(''),
  });
  name: any;
  loginFn: any;

  constructor(private router: Router, private taskService: TaskServices) {}

  ngOnInit(): void {

    this.taskService.getAllTasksFn().subscribe((res: any) => {
      this.tasks = res;
      console.log(this.tasks);
    });

  }


  Add() {
    let task = {
      option: this.AddForm.value.option || '',
      name: this.AddForm.value.name || '',
      time: this.AddForm.value.time || '',
      date: this.AddForm.value.date || '',
    };

    console.log(task);

    this.taskService.CreateFn(task).subscribe((res: any) => {
      res;
      this.router.navigate(['/home']);
    });
  }

  //delete
  delete(id: any) {

    this.taskService.DeleteTaskFn(id).subscribe((res: any) => {
      window.location.reload();
      console.log(id)
    });
  }
}