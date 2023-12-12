import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLevelComponent } from './product-level.component';

describe('ProductLevelComponent', () => {
  let component: ProductLevelComponent;
  let fixture: ComponentFixture<ProductLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductLevelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
