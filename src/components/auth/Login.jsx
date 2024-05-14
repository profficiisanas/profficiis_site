import React, { useEffect } from "react";
import { Button, Form, Grid, Input, theme, Typography } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import loginimg from "../../assets/images/loginimg.png";
import AOS from "aos";
import "aos/dist/aos.css"; 
const { useToken } = theme;
const { useBreakpoint } = Grid;
const { Text, Title, Link } = Typography;

export default function App() {
  const { token } = useToken();
  const screens = useBreakpoint();

  useEffect(() => { 
      document.title="login";
    AOS.init({
      duration: 1200,  
      once: true,     
    });
  }, []);

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const styles = {
    container: {
      margin: "0 auto",
      padding: screens.md ? `${token.paddingXL}px` : `${token.sizeXXL}px ${token.padding}px`,
      width: "380px"
    },
    footer: {
      marginTop: token.marginLG,
      textAlign: "center",
      width: "100%"
    },
    forgotPassword: {
      float: "right"
    },
    header: {
      marginBottom: token.marginXL
    },
    section: {
      alignItems: "center",
      backgroundColor: token.colorBgContainer,
      display: "flex",
      height: screens.sm ? "600px" : "auto",
      padding: screens.md ? `${token.sizeXXL}px 0px` : "0px"
    },
    text: {
      color: token.colorTextSecondary
    },
    title: {
      fontSize: screens.md ? token.fontSizeHeading2 : token.fontSizeHeading3
    },
    signUpLink: {
      color: "#BC9C22"
    }
  };

  return (
    <section style={styles.section} data-aos="fade-up">
      <div style={styles.container} data-aos="fade-right">
        <div style={styles.header}>
          <Title style={styles.title} data-aos="zoom-in">Login</Title>
          <Text style={styles.text} data-aos="fade-in">
            Bienvenue dans l'interface utilisateur de Profficiss ! Veuillez saisir vos coordonnées ci-dessous pour vous connecter.
          </Text>
        </div>
        <Form
          name="normal_login"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          layout="vertical"
          requiredMark="optional"
        >
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input
              prefix={<MailOutlined />}
              placeholder="Email"
              data-aos="zoom-out"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
              data-aos="zoom-out"
            />
          </Form.Item>
          <Form.Item data-aos="fade-right">
            <a style={styles.signUpLink} href="">
              Mot de passe oublié?
            </a>
          </Form.Item>
          <Form.Item style={{ marginBottom: "0px" }} data-aos="flip-up">
            <Button block="true" type="primary" htmlType="submit" style={{ backgroundColor: "#BC9C22", borderColor: "#BC9C22" }}>
              Log in
            </Button>
            <div style={styles.footer}>
              <Text style={styles.text}>Vous n'avez pas de compte ? </Text>
              <Link href="/register" style={styles.signUpLink}>S'inscrire maintenant</Link>
            </div>
          </Form.Item>
        </Form>
      </div>
      {screens.md && (
        <div data-aos="fade-left">
          <img style={{height:"500px", marginRight: "200px", borderRadius: "10px"}} src={loginimg} alt="" />
        </div>
      )}
    </section>
  );
}
