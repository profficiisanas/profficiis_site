import React, { useEffect } from "react";
import { Button, Form, Grid, Input, theme, Typography } from "antd";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import registerimg from "../../assets/images/registerimg.png";
import AOS from "aos";
import "aos/dist/aos.css";

const { useToken } = theme;
const { useBreakpoint } = Grid;
const { Text, Title, Link } = Typography;

export default function Register() {
  const { token } = useToken();
  const screens = useBreakpoint();

  useEffect(() => {
    document.title="register";

    AOS.init({
      duration: 1000, 
      once: true,
      mirror: false,
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
      <div style={styles.container} data-aos="fade-up">
        <div style={styles.header} data-aos="fade-up">
          <Title style={styles.title}>S'inscrire</Title>
          <Text style={styles.text}>
            Bienvenue sur l'interface utilisateur de Profficiss ! Veuillez saisir vos coordonnées ci-dessous pour créer un compte.
          </Text>
        </div>
        <Form
          name="registration_form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          layout="vertical"
          requiredMark="optional"
          data-aos="fade-up"
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Veuillez entrer votre nom d'utilisateur !",
              },
            ]}
            data-aos="fade-up"
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Nom d'utilisateur"
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Veuillez entrer votre adresse e-mail !",
              },
            ]}
            data-aos="fade-up"
          >
            <Input
              prefix={<MailOutlined />}
              placeholder="E-mail"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Veuillez entrer votre mot de passe !",
              },
            ]}
            data-aos="fade-up"
          >
            <Input.Password
              prefix={<LockOutlined />}
              type="password"
              placeholder="Mot de passe"
            />
          </Form.Item>
          <Form.Item style={{ marginBottom: "0px" }} data-aos="fade-up">
            <Button block="true" type="primary" htmlType="submit" style={{ backgroundColor: "#BC9C22", borderColor: "#BC9C22" }} data-aos="fade-up">
              S'inscrire
            </Button>
            <div style={styles.footer} data-aos="fade-up">
              <Text style={styles.text}>Vous avez déjà un compte ? </Text>
              <Link href="/login" style={styles.signUpLink}>Connectez-vous maintenant</Link>
            </div>
          </Form.Item>
        </Form>
      </div>
      {screens.md && (
        <div data-aos="fade-left">
          <img style={{height:"500px", marginRight: "200px", borderRadius: "10px"}} src={registerimg} alt="Visualisation de connexion" />
        </div>
      )}
    </section>
  );
}
