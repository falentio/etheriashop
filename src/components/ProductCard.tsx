import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  sold: boolean;
}

export function ProductCard({ id, name, description, imageUrl, sold }: ProductCardProps) {
  const [isFullScreen, setIsFullScreen] = useState(false);
console.log(sold)
  return (
    <>
      <Card className={cn(
        "overflow-hidden h-full flex flex-col pt-0 relative",
        sold && "opacity-70"
      )}>
        <div className="aspect-square w-full overflow-hidden">
          <img 
            src={imageUrl} 
            alt={name} 
            className={cn(
              "h-full w-full object-cover transition-all hover:scale-105 cursor-pointer",
              sold && "grayscale"
            )}
            onClick={() => setIsFullScreen(true)}
          />
        </div>
        <CardHeader>
          <CardTitle className="line-clamp-1">{name}</CardTitle>
          <CardDescription className="line-clamp-1">{description}</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button className="w-full" disabled={sold}>
            <MessageCircle className="mr-2 h-4 w-4" />
            {sold ? "Sold Out" : "Contact Seller"}
          </Button>
        </CardFooter>
        {sold && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-medium">
            Kosong
          </div>
        )}
      </Card>

      {isFullScreen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <Button 
            variant="ghost" 
            className="absolute top-4 right-4 text-white hover:bg-black/20"
            onClick={() => setIsFullScreen(false)}
          >
            <X className="h-6 w-6" />
          </Button>
          <img 
            src={imageUrl} 
            alt={name} 
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={() => setIsFullScreen(false)}
          />
        </div>
      )}
    </>
  );
} 