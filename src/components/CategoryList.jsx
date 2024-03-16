import { CategoryItem } from './CategoryItem';

function CategoryList({ catalog = [] }) {
  return (
    <div className="list" role="list">
      {catalog.map((el) => (
        <CategoryItem key={el.idCategory} {...el} />
      ))}
    </div>
  );
}

export { CategoryList };
