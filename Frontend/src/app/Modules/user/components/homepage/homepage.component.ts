import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  
  categories: any[] = [];
  featuredProducts: any[] = [];

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.loadCategories();
    this.loadFeaturedProducts();
  }

  loadCategories(): void {
    this.userService.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories.slice(0, 8); // Show only first 8 categories
      },
      error: (error) => {
        console.error('Error loading categories:', error);
      }
    });
  }

  loadFeaturedProducts(): void {
    this.userService.getProducts().subscribe({
      next: (products) => {
        this.featuredProducts = products.slice(0, 8); // Show only first 8 products
      },
      error: (error) => {
        console.error('Error loading products:', error);
      }
    });
  }

  navigateToCategory(categoryId: number): void {
    this.router.navigate(['/user/viewCategories'], { queryParams: { categoryId } });
  }

  addToCart(productId: number): void {
    this.userService.addToCart(productId).subscribe({
      next: (response) => {
        console.log('Product added to cart:', response);
        // You can add a success notification here
      },
      error: (error) => {
        console.error('Error adding product to cart:', error);
        // You can add an error notification here
      }
    });
  }
}