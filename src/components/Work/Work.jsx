import React from 'react';
import { motion } from 'framer-motion';
import styles from './WorkSection.module.css';

const experiences = [
  {
    company: 'Iorta Solutions Technology',
    role: 'Senior Software Engineer',
    period: 'Sep 2024 – Present',
    description: 'Worked on SalesDrive core product - HotForm for dynamic form creation through drag and drop. Also worked on SalesDrive-ChatBot for insurance leads processing.',
  },
  {
    company: 'Logixal Cloud Solutions Technology',
    role: 'Software Engineer',
    period: 'Dec 2022 – Aug 2023',
    description: 'Worked on Bed Bath & Beyond ecommerce website.',
  },
  {
    company: 'VCM Technology',
    role: 'Software Engineer',
    period: 'Sep 2019 – Nov 2022',
    description: 'Worked on Banking management system and Appu Pro for freight container allocation and tracking of ship containers.',
  },
];

const Work = () => {
  return (
    <div className={styles.workSection}>
      <h2 className='title'>Work Experience</h2>
      <div className={styles.timeline}>
        {experiences.map((experience, index) => (
          <motion.div
            className={styles.timelineItem}
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}
          >
            <div className={styles.timelineContent}>
              <h3 className={styles.company}>{experience.company}</h3>
              <p className={styles.role}>{experience.role}</p>
              <p className={styles.period}>{experience.period}</p>
              <p className={styles.description}>{experience.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
     
    </div>
  );
};

export default Work;
