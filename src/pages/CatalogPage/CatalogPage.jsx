import React, { useState, useEffect } from "react";
import { Catalog } from "../../components/Catalog/Catalog";
import { Pagination } from "../../components/Pagination/Pagination";
import { fetchCatalog } from "../../api/FetchCatalog.js";
import styles from "./CatalogPage.module.css";

export const CatalogPage = () => {
    const [catalog, setCatalog] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [catalogPerPage] = useState(5);
    const lastCatalogIndex = currentPage * catalogPerPage;
    const firstCatalogIndex = lastCatalogIndex - catalogPerPage;
    const currentCatalog = catalog?.data?.results.slice(
        firstCatalogIndex,
        lastCatalogIndex
    );

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const getCatalog = async (params) => {
        try {
            setIsLoading(true);
            const res = await fetchCatalog(params);
            setCatalog(res);
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getCatalog();
    }, []);

    return (
        <div className={styles.catalog__page}>
            <Catalog catalog={currentCatalog} isLoading={isLoading} />
            <Pagination
                catalogPerPage={catalogPerPage}
                totalCatalog={catalog?.data?.results.length}
                paginate={paginate}
            />
        </div>
    );
};
