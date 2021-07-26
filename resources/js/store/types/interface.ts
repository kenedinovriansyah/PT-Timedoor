export interface Product {
    id?: number;
    name?: string;
    description?: string;
    img?: string;
}
export interface Cart {
    id: number;
    img: string;
    name: string;
    total: number;
    quantity: number;
    tooping: [];
}

export interface ProductState {
    cart: Cart[];
    product: Product[];
    data: Product;
}
