import { motion } from 'framer-motion';
import { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      type: "Phone",
      value: "0858 007 213",
      link: "tel:0858007213"
    },
    {
      type: "Email",
      value: "nguyenlekhoi2003215@gmail.com",
      link: "mailto:nguyenlekhoi2003215@gmail.com"
    },
    {
      type: "GitHub",
      value: "github.com/NguyLekhoi",
      link: "https://github.com/NguyLekhoi"
    },
    {
      type: "Location",
      value: "Quận 8, TP.HCM",
      link: "https://maps.app.goo.gl/example"
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="footer-title">Navigation</h3>
            <ul className="footer-links">
              {['home', 'about', 'skills', 'projects', 'experience'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => scrollToSection(item)}
                    className="footer-link"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="footer-section contact-info"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="footer-title">Contact Information</h3>
            <ul className="contact-list">
              {contactInfo.map((item, index) => (
                <li key={index} className="contact-item">
                  <div className="contact-type">{item.type}</div>
                  {item.link ? (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="contact-text">{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="footer-section contact-form"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="footer-title">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="form-control"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-submit">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Nguyễn Lê Khôi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
