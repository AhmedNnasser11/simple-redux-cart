import axios from "axios";
import { Col, Row, Container, Spinner } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import Product from "../components/Product/Product";

function Home() {
  const dispatch = useDispatch();

  const product = useSelector((state) => state.allProducts.products);

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    if (product.length === 0) {
      fetchProducts();
    } else {
      return;
    }
  }, []);
  return (
    <>
      <Container style={{ marginTop: "20px" }}>
        <Row className="g-4">
          {product.length === 0 ? (
            <Spinner
              animation="border"
              size="lg"
              style={{
                margin: "auto",
                marginTop: "150px",
                width: "80px",
                height: "80px",
              }}
            />
          ) : (
            product.map((item) => (
              <Col md={3} sm={6} xs={12} key={item.id}>
                <Product item={item} />
              </Col>
            ))
          )}
        </Row>
      </Container>
    </>
  );
}

export default Home;
