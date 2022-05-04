
import CategoryItem from './CategoryItem';

function CategoryList({ catalog = {} }) {
	return (
            <div className="list">
                {catalog.map((el, index) => (
                    <CategoryItem key={el.idCategory} {...el} />
                ))}
            </div>
    );
}

export default CategoryList;
