import { useEffect, useState } from "react";
import {type Product } from "../utils/notion.ts";
import { Layout } from "./Layout";
import { ProductGrid } from "./ProductGrid";

export function Shop() {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        fetch("/product").then(res => res.json()).then(setProducts).catch(() => setProducts([]));
    }, []);
  return (
    <Layout>
      <div className="container mx-auto py-10 px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Starter Etheria</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cari starter idamanmu di sini!
          </p>
        </div>
        <ProductGrid products={products} />
      </div>
    </Layout>
  );
} 