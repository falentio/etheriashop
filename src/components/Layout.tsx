import { type ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-svh flex flex-col bg-background">
      <header className="border-b">
        <div className="container mx-auto py-4 px-4 flex justify-between items-center">
          <div className="font-bold text-xl">EtheriaShop</div>
          <nav className="hidden md:flex space-x-4">
            {/* <a href="/" className="hover:text-primary">Home</a>
            <a href="/" className="hover:text-primary">Products</a>
            <a href="/" className="hover:text-primary">About</a>
            */}
            <a href="https://facebook.com/kevin.falentio" className="hover:text-primary">Contact</a> 
          </nav>
        </div>
      </header>
      
      <main className="flex-auto">
        {children}
      </main>
      
      <footer className="border-t mt-16">
        <div className="container mx-auto py-6 px-4 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Falentio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
} 