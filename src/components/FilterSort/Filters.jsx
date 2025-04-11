// import React, { useState, useEffect } from 'react';
// import { Row, Col, Form } from 'react-bootstrap';

// const Filters = ({ products, categories, onUpdate }) => {
//   const [category, setCategory] = useState('all');
//   const [sort, setSort] = useState('');

//   useEffect(() => {
//     let filtered = [...products];
//     if (category !== 'all') filtered = filtered.filter(p => p.category === category);

//     if (sort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
//     if (sort === 'price-desc') filtered.sort((a, b) => b.price - a.price);
//     if (sort === 'title-asc') filtered.sort((a, b) => a.title.localeCompare(b.title));
//     if (sort === 'title-desc') filtered.sort((a, b) => b.title.localeCompare(a.title));

//     onUpdate(filtered);
//   }, [category, sort]);

//   return (
//     // <Row className="mb-3">
//     //   <Col md={4}>
//     //     <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
//     //       <option value="all">All Categories</option>
//     //       {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
//     //     </Form.Select>
//     //   </Col>
//     //   <Col md={4}>
//     //     <Form.Select value={sort} onChange={(e) => setSort(e.target.value)}>
//     //       <option value="">Sort By</option>
//     //       <option value="price-asc">Price: Low to High</option>
//     //       <option value="price-desc">Price: High to Low</option>
//     //       <option value="title-asc">Title: A–Z</option>
//     //       <option value="title-desc">Title: Z–A</option>
//     //     </Form.Select>
//     //   </Col>
//     // </Row>

//     <Row className="mbsetProducts-3">
//       <Col>
//         <div className="d-flex justify-content-end gap-3">
//           <Form.Select
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             style={{ width: '200px' }}
//           >
//             <option value="all">All Categories</option>
//             {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
//           </Form.Select>

//           <Form.Select
//             value={sort}
//             onChange={(e) => setSort(e.target.value)}
//             style={{ width: '200px' }}
//           >
//             <option value="">Sort By</option>
//             <option value="price-asc">Price: Low to High</option>
//             <option value="price-desc">Price: High to Low</option>
//             <option value="title-asc">Title: A–Z</option>
//             <option value="title-desc">Title: Z–A</option>
//           </Form.Select>
//         </div>
//       </Col>
//     </Row>
//   );
// };

// export default Filters;



// import React, { useState, useEffect } from 'react';
// import { Row, Col, Button, ButtonGroup } from 'react-bootstrap';

// const Filters = ({ products, categories, onUpdate }) => {
//   const [category, setCategory] = useState('all');
//   const [sort, setSort] = useState('');

//   useEffect(() => {
//     let filtered = [...products];

//     if (category !== 'all') {
//       filtered = filtered.filter(p => p.category === category);
//     }

//     if (sort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
//     if (sort === 'price-desc') filtered.sort((a, b) => b.price - a.price);
//     if (sort === 'title-asc') filtered.sort((a, b) => a.title.localeCompare(b.title));
//     if (sort === 'title-desc') filtered.sort((a, b) => b.title.localeCompare(a.title));

//     onUpdate(filtered);
//   }, [category, sort]);

//   return (
//     <div className="d-flex flex-column gap-4">
//       {/* Category Filters */}
//       <div>
//         <strong>Categories:</strong>
//         <ButtonGroup vertical className="mt-2 w-100">
//           <Button
//             variant={category === 'all' ? 'primary' : 'outline-primary'}
//             onClick={() => setCategory('all')}
//           >
//             All Categories
//           </Button>
//           {categories.map(cat => (
//             <Button
//               key={cat}
//               variant={category === cat ? 'primary' : 'outline-primary'}
//               onClick={() => setCategory(cat)}
//             >
//               {cat}
//             </Button>
//           ))}
//         </ButtonGroup>
//       </div>

//       {/* Sort Options */}
//       <div>
//         <strong>Sort By:</strong>
//         <ButtonGroup vertical className="mt-2 w-100">
//           <Button
//             variant={sort === '' ? 'primary' : 'outline-primary'}
//             onClick={() => setSort('')}
//           >
//             None
//           </Button>
//           <Button
//             variant={sort === 'price-asc' ? 'primary' : 'outline-primary'}
//             onClick={() => setSort('price-asc')}
//           >
//             Price: Low to High
//           </Button>
//           <Button
//             variant={sort === 'price-desc' ? 'primary' : 'outline-primary'}
//             onClick={() => setSort('price-desc')}
//           >
//             Price: High to Low
//           </Button>
//           <Button
//             variant={sort === 'title-asc' ? 'primary' : 'outline-primary'}
//             onClick={() => setSort('title-asc')}
//           >
//             Title: A–Z
//           </Button>
//           <Button
//             variant={sort === 'title-desc' ? 'primary' : 'outline-primary'}
//             onClick={() => setSort('title-desc')}
//           >
//             Title: Z–A
//           </Button>
//         </ButtonGroup>
//       </div>
//     </div>
//   );
// };

// export default Filters;


// import React, { useState, useEffect } from 'react';
// import { Button, ButtonGroup } from 'react-bootstrap';
// import "../style/filter.css"

// const Filters = ({ products, categories, onUpdate }) => {
//   const [category, setCategory] = useState('all');
//   const [sort, setSort] = useState('');

//   useEffect(() => {
//     let filtered = [...products];

//     if (category !== 'all') {
//       filtered = filtered.filter(p => p.category === category);
//     }

//     if (sort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
//     if (sort === 'price-desc') filtered.sort((a, b) => b.price - a.price);
//     if (sort === 'title-asc') filtered.sort((a, b) => a.title.localeCompare(b.title));
//     if (sort === 'title-desc') filtered.sort((a, b) => b.title.localeCompare(a.title));

//     onUpdate(filtered);
//   }, [category, sort]);

//   return (
//     <div className="filters-container">
//       <div>
//         <h5>Categories</h5>
//         <ButtonGroup vertical className="w-100">
//           <Button
//             className={`filter-btn ${category === 'all' ? 'active' : ''}`}
//             onClick={() => setCategory('all')}
//           >
//             All Categories
//           </Button>
//           {categories.map(cat => (
//             <Button
//               key={cat}
//               className={`filter-btn ${category === 'cat' ? 'active' : ''}`}
//               onClick={() => setCategory(cat)}
//             >
//               {cat}
//             </Button>
//           ))}
//         </ButtonGroup>
//       </div>

//       <div className="mt-4">
//         <h5>Sort By</h5>
//         <ButtonGroup vertical className="w-100">
//           <Button
//             className={`filter-btn ${sort === '' ? 'active' : ''}`}
//             onClick={() => setSort('')}
//           >
//             None
//           </Button>
//           <Button
//             className={`filter-btn ${sort === 'price-asc' ? 'active' : ''}`}
//             onClick={() => setSort('price-asc')}
//           >
//             Price: Low to High
//           </Button>
//           <Button
//             className={`filter-btn ${sort === 'price-desc' ? 'active' : ''}`}
//             onClick={() => setSort('price-desc')}
//           >
//             Price: High to Low
//           </Button>
//           <Button
//             className={`filter-btn ${sort === 'title-asc' ? 'active' : ''}`}
//             onClick={() => setSort('title-asc')}
//           >
//             Title: A–Z
//           </Button>
//           <Button
//             className={`filter-btn ${sort === 'title-desc' ? 'active' : ''}`}
//             onClick={() => setSort('title-desc')}
//           >
//             Title: Z–A
//           </Button>
//         </ButtonGroup>
//       </div>
//     </div>
//   );
// };

// export default Filters;

import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup, Form, Row, Col } from 'react-bootstrap';
import "../../style/filter.css";

const Filters = ({ products, categories, onUpdate }) => {
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Bootstrap md breakpoint

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
        // <div>
        //   <Form.Group className="mb-3">
        //     <Form.Label>Category</Form.Label>
        //     <Form.Select
        //       value={category}
        //       onChange={(e) => setCategory(e.target.value)}
        //     >
        //       <option value="all">All Categories</option>
        //       {categories.map(cat => (
        //         <option key={cat} value={cat}>
        //           {cat}
        //         </option>
        //       ))}
        //     </Form.Select>
        //   </Form.Group>

        //   <Form.Group>
        //     <Form.Label>Sort By</Form.Label>
        //     <Form.Select
        //       value={sort}
        //       onChange={(e) => setSort(e.target.value)}
        //     >
        //       <option value="">None</option>
        //       <option value="price-asc">Price: Low to High</option>
        //       <option value="price-desc">Price: High to Low</option>
        //       <option value="title-asc">Title: A–Z</option>
        //       <option value="title-desc">Title: Z–A</option>
        //     </Form.Select>
        //   </Form.Group>
        // </div>
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
