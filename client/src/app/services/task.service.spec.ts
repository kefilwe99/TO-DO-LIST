import { TestBed } from '@angular/core/testing';

import { Task, TaskServices} from './task.service';

describe('TaskService', () => {
  let service: TaskServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
