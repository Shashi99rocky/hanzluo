import React from 'react'
import { Helmet } from 'react-helmet'
import { Row, Col } from 'antd'
import './resume.less'

const Resume = () => (
  <Row id="resume-page-wrapper" type="flex" justify="center">
    <Helmet>
      <title>Resume | Hanz Luo</title>
    </Helmet>
    <Col className="wide-screen" xs={24} sm={22} md={18} lg={16} xl={14}>
      <p className="message">
        If the PDF plugin doesn't show correctly,{' '}
        <a href="/Hanz-Resume.pdf" target="_blank ">
          click here
        </a>
      </p>
      <object
        width="100%"
        height="1200px"
        type="application/pdf"
        data="http://localhost:3001/dist/public/Hanz-Resume.pdf"
        className="pdf-file"
      />
    </Col>
    <Col className="narrow-screen" xs={24} sm={22} md={18} lg={16} xl={14}>
      <p className="message">
        Read PDF version,{' '}
        <a href="http://localhost:3001/dist/public/Hanz-Resume.pdf" target="_blank ">
          click here
        </a>
      </p>
      <img src="http://localhost:3001/dist/public/images/Hanz-Resume.jpg" alt="Hanz Resume" />
    </Col>
  </Row>
)

export default Resume
