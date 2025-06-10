export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
}

export const products: Product[] = [
    {
        id: "1",
        name: "Premium Headphones",
        price: 129.99,
        description: "Wireless noise-cancelling headphones with premium sound quality and 30-hour battery life. Perfect for music lovers and remote workers.",
        imageUrl: "https://placehold.co/400x400/333/white?text=Headphones"
    },
    {
        id: "2",
        name: "Smart Watch",
        price: 199.99,
        description: "Feature-rich smartwatch with heart rate monitoring, sleep tracking, and notifications. Water-resistant and stylish design.",
        imageUrl: "https://placehold.co/400x400/333/white?text=Watch"
    },
    {
        id: "3",
        name: "Wireless Charger",
        price: 39.99,
        description: "Fast wireless charging pad compatible with all Qi-enabled devices. Sleek, minimalist design with LED indicator.",
        imageUrl: "https://placehold.co/400x400/333/white?text=Charger"
    },
    {
        id: "4",
        name: "Fitness Tracker",
        price: 79.99,
        description: "Lightweight fitness band with step counter, heart rate monitor, and sleep analysis. Syncs with your phone for notifications.",
        imageUrl: "https://placehold.co/400x400/333/white?text=Tracker"
    },
    {
        id: "5",
        name: "Portable Speaker",
        price: 59.99,
        description: "Compact Bluetooth speaker with powerful sound and 12-hour battery life. Waterproof design makes it perfect for outdoor use.",
        imageUrl: "https://placehold.co/400x400/333/white?text=Speaker"
    },
    {
        id: "6",
        name: "Laptop Backpack",
        price: 49.99,
        description: "Durable, water-resistant backpack with dedicated laptop compartment and multiple organization pockets. Comfortable padded straps.",
        imageUrl: "https://placehold.co/400x400/333/white?text=Backpack"
    }
]; 