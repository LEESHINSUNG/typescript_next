import { getProduct, getProducts } from "@/service/products";
import { notFound } from "next/navigation";

// ISR : revalidate 로 지정한 값의 시간이 흐르면 자동 업데이트됨
export const revalidate = 3;

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름: ${params.slug}`,
  };
}

export default async function ProductPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);

  if (!product) notFound();

  // 서버 파일에 있는 데이터중 해당 제품의 정보를 찾아서 그걸 보여줌
  return <h1>{product.name} 제품 설명 페이지</h1>;
}

export async function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄거임 (SSG)
  const products = await getProducts();
  return products.map((products) => ({ slug: products.id }));
}
