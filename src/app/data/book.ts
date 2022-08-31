
export interface Review{
    name:string, 
    title:string,
    details:string,
    rating:number,
    _id?:string
}

export interface Book{

    _id?:string,
    isbn:string,
    id:string, 
    title:string, 
    author:string,
    pages?:number, //either string or number
    rating:number,
    votes?:number,
    description:string,
    tags?: Array<string>,
    cover:string, 
    price:number, 
    series?:string,
    seriesIndex?:string|number,
    authorId:string,
    reviews?:Array<Review>

}