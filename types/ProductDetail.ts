import { CategoryDetail } from "./CategoryDetail";
import { ProductDescriptionType } from "./ProductDescription";

export type ProductDetail = {
    productCode: string,
    productName: string,
    handle: string
    imgSrc: string,
    description: ProductDescriptionType[],
    summary: string,
    category: CategoryDetail
}
