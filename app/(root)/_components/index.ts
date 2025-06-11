export const Document11 = [
    {
    label: "blog",
    url: "/blog", 
},
{
    label: "pricing",
    url: "/pricing", 
},
{
    label: "features",
    url: "/features", 
},
{
    label: "about",
    url: "/", 
},

]
export const selling =[
    "→ Sell your Top 10 lists ",
    "→ Sell your crypto tips", 
    "→ Sell your fractal pack", 
    "→ Sell your keto cookbook ",
    "→ Sell your C4D scenes", 
    "→ Sell your new emojis",
    "→ Seriously, sell anything!"
]

interface Cardite{
    id: number,
    image: string,
    color?: string,
    label: string,
    description: string,
    others:{
        item1?: string, 
        item2?: string, 
        items?: string, 
    }
}
export const cardItems =[{
    image: "/pic/1.svg",
   label: "3D",
   description: "Perfect your craft with the same tools used at Dreamworks and Pixar",
   others:
       [
           "blsssender ", "3d model ", "spark ar ", 
       ]
   },


  
]