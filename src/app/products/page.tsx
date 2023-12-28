import Link from "next/link";

const products = ["shirt", "pants", "skirt", "shoes"]

export default function ProductsPage() {
  return (
    <>
      <h1>제품 소개 페이지</h1>
      <ul>
        {products.map((pd, index) => (
          <li key={index}>
            <Link href={`/products/${pd}`}>{pd}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
