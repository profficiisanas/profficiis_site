import React, { useState, useEffect } from 'react';
import { Card, Button, Form, Input, Upload, Modal, message, Select } from 'antd';
import { UploadOutlined, EnvironmentOutlined, BankOutlined, DollarCircleOutlined, CheckSquareOutlined } from '@ant-design/icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const { Meta } = Card;
const { Option } = Select;

const JobCard = ({ job }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    document.title= "offres d'emploi"
    AOS.init({
      duration: 1000, 
    });
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = async (values) => {
    console.log('Valeurs du formulaire : ', values);
    try {
      const formData = new FormData();
      formData.append('jobTitle', job.title);
      formData.append('nom', values.nom);
      formData.append('email', values.email);
      formData.append('cv', values.cv[0].originFileObj);
      formData.append('adresse', values.adresse);
      formData.append('âge', values.âge);
      formData.append('sexe', values.sexe);
      formData.append('statutMatrimonial', values.statutMatrimonial);

      const response = await fetch('http://localhost:5000/api/send-application', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        message.success('Candidature soumise avec succès!');
        setIsModalVisible(false);
      } else {
        throw new Error('Échec de l\'envoi de la candidature');
      }
    } catch (error) {
      message.error('Erreur lors de la soumission de la candidature : ' + error.message);
    }
  };

  return (
    <Card style={{ width: '100%', marginBottom: '25px', border: '2px solid #BC9C22', borderRadius: '12px' }} data-aos="fade-up">
      <Meta title={job.title} description={job.description} />
      <p className="text-gray-700 mt-2 font-semibold" data-aos="fade-right"><BankOutlined style={{ marginRight: 8 }} />Entreprise: {job.company}</p>
      <p className="text-gray-600" data-aos="fade-right" data-aos-delay="100"><EnvironmentOutlined style={{ marginRight: 8 }} />Emplacement: {job.location}</p>
      <p className="text-gray-500 font-bold" data-aos="fade-right" data-aos-delay="200"><DollarCircleOutlined style={{ marginRight: 8 }} />Salaire: {job.salaryRange}</p>
      <div className="mb-4" data-aos="zoom-in">
        <strong><CheckSquareOutlined style={{ marginRight: 8 }} />Exigences :</strong>
        <ul className="list-disc pl-5">
          {job.requirements.map((requirement, index) => (
            <li key={index} className="text-blue-700 hover:text-blue-900 transition-colors duration-300">{requirement}</li>
          ))}
        </ul>
      </div>
      <Button type="primary" style={{ backgroundColor: '#BC9C22' }} className="mt-2 block w-full bg-yellow-500 hover:bg-yellow-600 border-yellow-500" onClick={showModal}>
        Postuler
      </Button>
      <Modal title="Envoyer votre CV" visible={isModalVisible} onCancel={handleCancel} footer={null}>
        <Form layout="vertical" onFinish={onFinish}><br /><br /> <br />
          <Form.Item name="nom" label="Nom" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="adresse" label="Adresse" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="âge" label="Âge" rules={[{ required: true }]}>
            <Input type="number" />
          </Form.Item>
          <Form.Item name="sexe" label="Sexe" rules={[{ required: true }]}>
            <Select>
              <Option value="masculin">Masculin</Option>
              <Option value="féminin">Féminin</Option>
            </Select>
          </Form.Item>
          <Form.Item name="statutMatrimonial" label="statut familial" rules={[{ required: true }]}>
            <Select>
              <Option value="célibataire">Célibataire</Option>
              <Option value="marié(e)">Marié(e)</Option>
              <Option value="divorcé(e)">Divorcé(e)</Option>
              <Option value="veuf(veuve)">Veuf(veuve)</Option>
            </Select>
          </Form.Item>
          <Form.Item name="cv" label="Télécharger CV" valuePropName="fileList" getValueFromEvent={(e) => e.fileList} rules={[{ required: true, message: 'Veuillez télécharger votre CV' }]}>
            <Upload name="cv" listType="text" accept=".pdf">
              <Button icon={<UploadOutlined />}>Cliquez pour télécharger</Button>
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ backgroundColor: '#BC9C22' }} >
              Envoyer votre CV
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <p className="text-gray-500 mt-2">Date de publication : {new Date(job.datePosted).toLocaleDateString()}</p>
    </Card>
  );
};

export default JobCard;
