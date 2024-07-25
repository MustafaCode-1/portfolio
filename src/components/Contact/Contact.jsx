import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Form, Input, Button, notification } from "antd";
import { motion } from "framer-motion";
import coder from "../../assets/coding.gif";
import styles from "./Contact.module.css";

const { TextArea } = Input;

const Contact = () => {
  const form = useRef();

  const sendEmail = (values) => {
    const templateParams = {
      from_name: values.user_name,
      to_name: "Shayan",
      email_id: values.user_email,
      message: values.message,
    };

    emailjs
      .send("service_9774we7", "template_9w52538", templateParams, "LzyiC8DL8Opwky0vj")
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          notification.success({
            message: 'Message Sent',
            description: 'Your message has been sent successfully!',
          });
          form.current.resetFields();
        },
        (error) => {
          console.log("FAILED...", error.text);
          notification.error({
            message: 'Message Failed',
            description: 'There was an error sending your message. Please try again.',
          });
        }
      );
  };

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={styles.contactPage}>
      <motion.h1
        className='title'
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h1>
      <motion.div
        className={styles.contactFormContainer}
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.imageContainer}>
          <img src={coder} alt="Coding GIF" className={styles.coderGif} />
        </div>
        <Form
          ref={form}
          onFinish={sendEmail}
          layout="vertical"
          className={styles.contactForm}
        >
          <Form.Item
            name="user_name"
            label="Your Name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="user_email"
            label="Your Email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
                type: "email",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="subject"
            label="Your Subject"
            rules={[{ required: true, message: "Please input your subject!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="message"
            label="Your Message"
            rules={[{ required: true, message: "Please input your message!" }]}
          >
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.submitButton}
            >
              Send Message
            </Button>
          </Form.Item>
        </Form>
      </motion.div>
    </div>
  );
};

export default Contact;
