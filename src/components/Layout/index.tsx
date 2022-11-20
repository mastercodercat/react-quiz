import { ReactNode } from "react";
import { Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet-async";

interface LayoutProps {
  title: string;
  className?: string;
  children: ReactNode;
}

const Layout = ({ title, className, children }: LayoutProps) => {
  return (
    <Row>
      <Helmet title={title} />
      <Col
        sm={12}
        md={8}
        lg={6}
        className="my-5 mx-auto p-5 bg-secondary bg-opacity-25"
      >
        <Row className="mb-5">
          <Col sm={12} className="text-center">
            <h1>{title}</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className={className}>
            {children}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Layout;
