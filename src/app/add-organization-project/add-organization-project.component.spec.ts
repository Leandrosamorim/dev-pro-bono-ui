import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrganizationProjectComponent } from './add-organization-project.component';

describe('AddOrganizationProjectComponent', () => {
  let component: AddOrganizationProjectComponent;
  let fixture: ComponentFixture<AddOrganizationProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddOrganizationProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddOrganizationProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
