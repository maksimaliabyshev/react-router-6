import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { getAllCategories } from '../api';
import CategoryList from '../components/CategoryList';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

function Home() {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);

    const [searchParams, setSearchParams] = useSearchParams();

    const handleSearch = (str) => {
        setFilteredCatalog(
            catalog.filter((item) => {
                return item.strCategory
                    .toLowerCase()
                    .includes(str.toLowerCase());
            })
		);
		str
            ? setSearchParams({ search: str })
            : setSearchParams({});
    };
	useEffect(() => {
        const search = Object.fromEntries([...searchParams]).search;
        getAllCategories().then((data) => {
			setCatalog(data.categories);
				setFilteredCatalog(
                    search
                        ? data.categories.filter((item) =>
                              item.strCategory.toLowerCase().includes(search)
                          )
                        : data.categories
                );
        });
    }, [searchParams]);

    return (
        <>
            <Search cb={handleSearch} />
            {!catalog.length ? (
                <Preloader />
            ) : (
                <CategoryList catalog={filteredCatalog} />
            )}
        </>
    );
}

export default Home;
