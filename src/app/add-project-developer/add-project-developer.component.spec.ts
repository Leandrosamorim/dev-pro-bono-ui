import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectDeveloperComponent } from './add-project-developer.component';

describe('AddProjectDeveloperComponent', () => {
  let component: AddProjectDeveloperComponent;
  let fixture: ComponentFixture<AddProjectDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddProjectDeveloperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddProjectDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
