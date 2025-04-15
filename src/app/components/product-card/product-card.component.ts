import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <p>{{ name }}</p>
      <img [src]="image" [alt]="name" />
      <p class="price">{{ price }} €</p>
      <button>📜 Ajouter au manier</button>
    </div>
  `,
  styles: [
    `
    .card {
      border: 1px solid #ddd;
      border-radius: 10px;
      padding: 16px;
      max-width: 220px;
      text-align: center;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      background: white;
    }
    img {
      width: 100%;
      height: 150px;
      object-fit: cover;
      border-radius: 6px;
      margin-bottom: 12px;
    }
    .price {
      font-weight: bold;
      color: #2a9d8f;
    }
    button {
      background-color: #2a9d8f;
      color: white;
      border: none;
      padding: 10px;
      border-radius: 6px;
      margin-left: 8px;
      cursor: pointer;
      transition: transform 0.2s ease;
    }
  `
  ]
})
export class ProductCardComponent {
    @Input() name!: string;
    @Input() price!:number;
    @Input() image!: string;
}
