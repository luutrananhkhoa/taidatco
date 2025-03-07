// {
//     "is_in_stock": true,
//     "is_featured": true,
//     "is_active": true,
//     "id": "3f506a3c-ae6b-44c4-accd-819bdab9ef1e",
//     "category_id": "498173c3-888e-42af-bf2b-110867a40529",
//     "created_by": "fa407f8c-ee78-40cc-b320-98551464ff50",
//     "name": "Laptop X100",
//     "slug": "laptop-x100",
//     "description": "High-performance laptop.",
//     "short_description": "Powerful laptop for professionals.",
//     "dimensions": "13x9x1",
//     "materials": "Aluminum, Plastic",
//     "color": "Silver",
//     "meta_title": "Laptop X100 - Best Performance",
//     "meta_description": "High-performance laptop for demanding users.",
//     "created_at": "2025-02-23 04:52:41.22897+00",
//     "updated_at": "2025-02-23 04:52:41.22897+00"
// }
export interface Product {
    id: string;
    name: string;
    slug: string;
    description: string;
    short_description: string;
    dimensions: string;
    materials: string;
    color: string;
    meta_title: string;
    meta_description: string;
    created_at: string;
    updated_at: string;
    is_in_stock: boolean;
    is_featured: boolean;
    is_active: boolean;
    category_id: string;
    created_by: string;
}