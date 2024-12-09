export interface CardProps {
    image: string; // URL for the image
    title: string; // Title text
    code: string; // Code text
    price: string | number; // Price value
    boxColors: string[]; // Array of colors for the boxes
  }
  
  export interface SecondCardProps {
    image: string; // URL for the image
    title: string; // Title text
    price: string | number; // Price value
    originalPrice: number
  }


    export interface TopCateg {
    image: string; // URL for the image
    title: string; // Title text
    price: string | number; // Price value
  }
