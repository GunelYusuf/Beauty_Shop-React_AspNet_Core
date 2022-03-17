import { Card } from './Card/Card';

export const Categories = ({ categories }) => {
  return (
    <>
      {categories.map((category) => (
        <Card key={category.categoryId} category={category} />
      ))}
    </>
  );
};
