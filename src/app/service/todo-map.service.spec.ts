import { TestBed } from '@angular/core/testing';

import { TodoMapService } from './todo-map.service';

describe('TodoMapService', () => {
  let service: TodoMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
