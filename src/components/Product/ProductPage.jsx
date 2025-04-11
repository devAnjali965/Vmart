import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col, Spinner } from 'react-bootstrap';
import Filters from '../FilterSort/Filters';
import ProductCard from './ProductCard';
import PaginationBar from './PaginationBar';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      const [productRes, categoryRes] = await Promise.all([
        axios.get('https://fakestoreapi.com/products'),
        axios.get('https://fakestoreapi.com/products/categories'),
      ]);
      setProducts(productRes.data);
      setFiltered(productRes.data);
      setCategories(categoryRes.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleFilterSort = (data) => {
    setFiltered(data);
    setCurrentPage(1);
  };

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = filtered.slice(indexOfFirst, indexOfLast);

  return (
    <div>
      {/* <Row className="justify-content-end mb-2 align-items-center  ">
        <Col className='  text-end'>
          <Filters products={products} categories={categories} onUpdate={handleFilterSort} />
        </Col>
      </Row>
      {loading ? (
        <div className="text-center my-5">
          <Spinner animation="border" />
        </div>
      ) : (
        <Row className="g-4">
          {currentItems.map(product => (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      )} */}


      <Row className="mb-2">
        {loading ? (
          <div className="text-center my-5 w-100">
            <Spinner animation="border" />
          </div>
        ) : (
          <>
            <Col xs={12} md={3} lg={2} className="mb-3">
              <Filters products={products} categories={categories} onUpdate={handleFilterSort} />
            </Col>

            <Col xs={12} md={9} lg={10}>
              <Row className="g-4">
                {currentItems.map(product => (
                  <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                    <ProductCard product={product} />
                  </Col>
                ))}
              </Row>
            </Col>
          </>
        )}
      </Row>


      <Row>
        <Col className='d-flex justify-content-end'>
          <PaginationBar
            totalItems={filtered.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </Col>
      </Row>
      {/* <PaginationBar
        totalItems={filtered.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      /> */}
    </div>
  );
};

export default ProductPage;