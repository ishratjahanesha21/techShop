import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react"


export default async function ProductCard ()  {
    let data = await fetch("https://fakestoreapi.com/products")
    let product = await data.json()
  return (
    <div>
        {
            product.map((product: { id: Key | null | undefined; title: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined })=>(
                <div key={product.id}>
                {product.title}
                </div>
            ))
        }
    </div>
  )
}

