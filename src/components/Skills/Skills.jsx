import React from 'react';
import { motion } from 'framer-motion';
import styles from './Skills.module.css'; 

const skills = [
  'JavaScript', 'TypeScript', 'HTML', 'CSS', 'React.js', 'Next.js', 
  'Express.js', 'SASS', 'Tailwind CSS', 'Material UI', 'Ant Design', 
  'Redux', 'Bootstrap', 'react-spring', 'Framer Motion', 'Node.js', 'Broadleaf', 
  'Microservices', 'MongoDB', 'Git', 'GitHub', 'JIRA', 'Figma', 'Postman'
];

const Skills = () => {
  return (
    <div className={styles.skillsSection}>
      <h2 className='title'>Skills</h2>
      <div className={styles.gridContainer}>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={styles.card}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
