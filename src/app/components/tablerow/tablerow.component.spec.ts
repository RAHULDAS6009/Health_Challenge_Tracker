import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablerowComponent } from './tablerow.component';

describe('TablerowComponent', () => {
  let component: TablerowComponent;
  let fixture: ComponentFixture<TablerowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablerowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablerowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
