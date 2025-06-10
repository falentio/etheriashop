import { useEffect, useState } from "react";
import { type Product } from "../utils/notion.ts";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id + ""}
          name={product.name}
          description={product.character}
          imageUrl={product.images[0]}
          sold={product.status === "Sold"}
        />
      ))}
      {products.length === 0 && (
        <div className="col-span-full text-center">
          <p className="text-muted-foreground">No products found</p>
        </div>
      )}
    </div>
  );
} 