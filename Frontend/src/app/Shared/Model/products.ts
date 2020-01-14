export interface Iproducts {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  offerPrice: number;
  isAvailable: boolean;
  isTodayOffer: boolean;
  category: {
    categoryName: string;
    subCategory: {
      name: string;
    };
  };
}
