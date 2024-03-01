

import { Button, Form, Input } from "antd";
import { useState } from "react";

const { Item } = Form;

const encode = (data: any) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
};

interface Props {
    setModalShow: (value: boolean) => void;
    messageTitle?: string;
}

const ContactForm = ({ setModalShow, messageTitle = "Send Message" }: Props) => {
    const [confirm, setConfirm] = useState('');

    const [form] = Form.useForm();


    const handleSubmit = (event: any) => {

        form
            .validateFields()
            .then((values) => {

                console.log(confirm);
                console.log(values);

                fetch("/", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: encode({
                        "form-name": event.target.getAttribute("name"),
                        ...values
                    })
                })
                    .then(() => {

                        form.resetFields();
                        setConfirm("Thank You I'll respond as soon as Possible");

                        setTimeout(() => {
                            if (setModalShow) setModalShow(false);
                            setTimeout(() => {
                                setConfirm('');
                            }, 2000);
                        }, 4000);
                    })
                    .catch(error => setConfirm(error));


            })
            .catch((info) => {
                console.log("Validate Failed:", info);
            }).finally(() => {

            });

    };

    return (
        <Form
            // onSubmit={handleSubmit}
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            layout="vertical"
            form={form}
        >
            <input type="hidden" name="form-name" value="contact" />
            <Item
                label="Full Name"
                name="name"
            >
                <Input size="large" />
            </Item>
            <Item
                label="Email"
                name="email"
            >
                <Input size="large" />
            </Item>
            <Item
                label="Description"
                name="message"
            >
                <Input.TextArea
                    size="large"
                    placeholder="Type Your Message..."
                    rows={4}
                />
            </Item>
            <Button
                onClick={handleSubmit}
                htmlType="submit"
                type="primary"
                size="large"
            >Send</Button>
        </Form>
    );
};

export default ContactForm;