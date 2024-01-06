type Props = {
  params: {
    slug: string;
  };
};

export default function PantsPage({ params }: Props) {
  return (
    <div>
      <h1>{params.slug} 제품 설명 페이지</h1>
    </div>
  );
}

export function generateStaticParams() {
  const products = ["pants", "skirt"];
  return products.map((product) => ({
    slug: product,
  }));
}
