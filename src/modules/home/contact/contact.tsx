import { Col, Row } from "antd";
import { CoffeeMug, ContactForm, Header } from "modules/ui";

const Contact = () => {
    return (
        <Row gutter={[0, 0]} justify="center">
            <Col>
                <Header accent="Contact" text="Me" />
            </Col>
            <Col span={24}>
                <Row>
                    <Col span={12}>
                        <CoffeeMug />
                    </Col>
                    <Col span={12}>
                        <ContactForm />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};
export default Contact;