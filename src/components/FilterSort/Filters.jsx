import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup, Form, Row, Col } from 'react-bootstrap';
import "../../style/filter.css";

const Filters = ({ products, categories, onUpdate }) => {
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); 

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let filtered = [...products];

    if (category !== 'all') {
      filtered = filtered.filter(p => p.category === category);
    }

    if (sort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') filtered.sort((a, b) => b.price - a.price);
    if (sort === 'title-asc') filtered.sort((a, b) => a.title.localeCompare(b.title));
    if (sort === 'title-desc') filtered.sort((a, b) => b.title.localeCompare(a.title));

    onUpdate(filtered);
  }, [category, sort]);

  return (
    <div className="filters-container">
      {isMobile ? (
        <Row className="gx-3">
          <Col xs={6}>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>

          <Col xs={6}>
            <Form.Group className="mb-3">
              <Form.Label>Sort By</Form.Label>
              <Form.Select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="">None</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="title-asc">Title: A–Z</option>
                <option value="title-desc">Title: Z–A</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
      ) : (
        <>
          <div>
            <h5>Categories</h5>
            <ButtonGroup vertical className="w-100">
              <Button
                className={`filter-btn ${category === 'all' ? 'active' : ''}`}
                onClick={() => setCategory('all')}
              >
                All Categories
              </Button>
              {categories.map(cat => (
                <Button
                  key={cat}
                  className={`filter-btn ${category === cat ? 'active' : ''}`}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </Button>
              ))}
            </ButtonGroup>
          </div>

          <div className="mt-4">
            <h5>Sort By</h5>
            <ButtonGroup vertical className="w-100">
              <Button
                className={`filter-btn ${sort === '' ? 'active' : ''}`}
                onClick={() => setSort('')}
              >
                None
              </Button>
              <Button
                className={`filter-btn ${sort === 'price-asc' ? 'active' : ''}`}
                onClick={() => setSort('price-asc')}
              >
                Price: Low to High
              </Button>
              <Button
                className={`filter-btn ${sort === 'price-desc' ? 'active' : ''}`}
                onClick={() => setSort('price-desc')}
              >
                Price: High to Low
              </Button>
              <Button
                className={`filter-btn ${sort === 'title-asc' ? 'active' : ''}`}
                onClick={() => setSort('title-asc')}
              >
                Title: A–Z
              </Button>
              <Button
                className={`filter-btn ${sort === 'title-desc' ? 'active' : ''}`}
                onClick={() => setSort('title-desc')}
              >
                Title: Z–A
              </Button>
            </ButtonGroup>
          </div>
        </>
      )}
    </div>
  );
};

export default Filters;
