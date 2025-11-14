export interface Productss {
    id: number;
    name: string;
    price: number;
    type: 'sofa' | 'bed' | 'chair' | 'featured';
    imageUrl: string;
}