
export interface Product{
    id?: number;
    name: string;
    price: number;
}

// for insert, add id.
export type ProductCreateForm = Omit<Product, 'id'>;