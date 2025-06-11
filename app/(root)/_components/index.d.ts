export interface Carditems{
    id?: number,
    image: string,
    color?: string,
    label?: string,
    description?: string,
    others?:{
        item1?: string, 
        item2?: string, 
        items?: string, 
    }
}