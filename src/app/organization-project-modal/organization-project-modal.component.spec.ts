import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationProjectModalComponent } from './organization-project-modal.component';

describe('OrganizationProjectModalComponent', () => {
  let component: OrganizationProjectModalComponent;
  let fixture: ComponentFixture<OrganizationProjectModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizationProjectModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganizationProjectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
