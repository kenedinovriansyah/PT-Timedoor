export interface Product {}
export interface Cart {
    id: number;
    img: string;
    name: string;
    total: number;
    quantity: number;
}

export interface ProductState {
    cart: Cart[];
    product: Product[];
}
