export interface Iproducts {
  _id?: string;
  id: number;
  name: string;
  image: string;
  description: string;
  quantity: number;
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

  dataSize?: any; // pagination
}
