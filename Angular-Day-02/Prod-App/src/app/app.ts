import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

type ProductCategory = 'electronics' | 'clothing' | 'home decor' | 'kitchen';

interface Product {
  prodId: number;
  prodName: string;
  prodPrice: number;
  prodCategory: ProductCategory;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  protected readonly title = signal('Product Inventory');

  protected readonly emptyProducts = signal<Product[]>([]);

  protected readonly products = signal<Product[]>([
    { prodId: 101, prodName: 'Wireless Earbuds', prodPrice: 2999, prodCategory: 'electronics' },
    { prodId: 102, prodName: 'Cotton T-Shirt', prodPrice: 799, prodCategory: 'clothing' },
    { prodId: 103, prodName: 'Wall Clock', prodPrice: 1499, prodCategory: 'home decor' },
    { prodId: 104, prodName: 'Table Lamp', prodPrice: 1999, prodCategory: 'home decor' },
    { prodId: 105, prodName: 'Blender', prodPrice: 3499, prodCategory: 'kitchen' },
    { prodId: 106, prodName: 'Smart Watch', prodPrice: 6999, prodCategory: 'electronics' }
  ]);

  protected readonly hasNoProducts = computed(() => this.emptyProducts().length === 0);
  protected readonly hasProducts = computed(() => this.products().length > 0);

  protected categoryClass(category: ProductCategory): string {
    switch (category) {
      case 'electronics':
        return 'category-chip category-electronics';
      case 'clothing':
        return 'category-chip category-clothing';
      case 'home decor':
        return 'category-chip category-home-decor';
      case 'kitchen':
        return 'category-chip category-kitchen';
      default:
        return 'category-chip';
    }
  }
}
