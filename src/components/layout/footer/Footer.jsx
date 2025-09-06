import { motion } from 'framer-motion';
import { useState } from 'react';
import './Footer.css';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

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
    { type: 'phone', value: '0858 007 213', link: 'tel:0858007213', icon: <FiPhone color="#000" /> },
    { type: 'email', value: 'nguyenlekhoi2003215@gmail.com', link: 'mailto:nguyenlekhoi2003215@gmail.com', icon: <FiMail color="#000" /> },
    { type: 'location', value: '928 Tạ Quang Bửu phường Bình Đông quận 8', link: 'https://www.google.com/maps/place/928+%C4%90.+T%E1%BA%A1+Quang+B%E1%BB%ADu,+Ph%C6%B0%E1%BB%9Dng+5,+Qu%E1%BA%ADn+8,+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.7343922,106.6558115,17z/data=!3m1!4b1!4m6!3m5!1s0x31752e437f055a13:0x3ace3403e00429b0!8m2!3d10.7343922!4d106.6583864!16s%2Fg%2F11j2vw41tb?entry=ttu&g_ep=EgoyMDI1MDgzMC4wIKXMDSoASAFQAw%3D%3D', icon: <FiMapPin color="#000" /> },
    { type: 'github', value: 'github.com/NguyLekhoi', link: 'https://github.com/NguyLekhoi', icon: null },
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
                  <div className="contact-type">
                    {item.type === 'github' ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: '#000' }}>
                        <FaGithub size={20} color="#000" />
                      </a>
                    ) : (
                      item.icon
                    )}
                  </div>
                  {item.type !== 'github' ? (
                    item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="contact-link">{item.value}</a>
                    ) : (
                      <span className="contact-text">{item.value}</span>
                    )
                  ) : (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="contact-link">NguyLeKhoi</a>
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
