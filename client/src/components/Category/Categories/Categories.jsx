import { Card } from './Card/Card';

export const Categories = ({ categories }) => {
  return (
    <>
      {categories?.map((category) => (
        <Card key={category.id} category={category} />
      ))}
    </>
  );
};
