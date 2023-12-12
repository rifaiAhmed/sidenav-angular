import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLevelTwoComponent } from './product-level-two.component';

describe('ProductLevelTwoComponent', () => {
  let component: ProductLevelTwoComponent;
  let fixture: ComponentFixture<ProductLevelTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductLevelTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductLevelTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
