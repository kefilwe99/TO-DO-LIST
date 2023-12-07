import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from 'src/app/interfaces/task';
import { TaskServices } from 'src/app/services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  // Add form 
  AddForm = new FormGroup({
    option: new FormControl(''),
    name: new FormControl(''),
    time: new FormControl(''),
    date: new FormControl(''),
  });
  tasks: Task[] = [];
option: any;

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
      this.router.navigate(['/dash']);
    });
  }

  //delete
  delete(id: any) {

    this.taskService.DeleteTaskFn(id).subscribe((res: any) => {
      window.location.reload();
      console.log(id)
    });
  }


  //update
  update(id: any) {
    
    let task = {
      option: this.AddForm.value.option || '',
      name: this.AddForm.value.name || '',
      time: this.AddForm.value.time || '',
      date: this.AddForm.value.date || '',
    };
    this.taskService.updateTaskFn(id, task).subscribe((res: any) => {
      console.log(res)
    });
  }
}
