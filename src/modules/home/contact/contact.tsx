import { Col, Row } from "antd";
import { CoffeeMug, ContactForm, Header } from "modules/ui";
import { useState } from "react";

const Contact = () => {
    const [modalShow, setModalShow] = useState<boolean>(false);

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
                        <ContactForm setModalShow={setModalShow} />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};
export default Contact;