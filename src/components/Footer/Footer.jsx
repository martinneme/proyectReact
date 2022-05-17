import { Card } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <div border="secondary" className="Footer">
        <Card border="secondary" className="Footer">
          <Card.Body className="cardFooter">linkedin</Card.Body>
          <Card.Body className="cardFooter">
            <Card.Text>Proyecto React</Card.Text>
            <Card.Text>Buenos Aires,AR</Card.Text>
            
          </Card.Body>
          <Card.Body className="cardFooter">CV</Card.Body>
        </Card>
      </div>
      <Card border="secondary" className="FooterCP">
        <Card.Text>© 2022 Copyright: Martin Neme</Card.Text>
        </Card>
    </>
  );
}
