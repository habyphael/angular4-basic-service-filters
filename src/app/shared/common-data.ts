export interface ILocation {
    id: string;
    locationName: string;
    description: string;
    type: string;
    location: string;
    eventType: string;
    price: number;
    guests: number;
    starRating: number;
    imageUrl: string;
}

export interface IQueryLocation {
    id: number;
    text: string;
    type: string;
    location: string;
    eventType: string;
    minPrice: number;
    maxPrice: number;
    guests: number;
}