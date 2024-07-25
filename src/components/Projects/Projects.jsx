import React from "react";
import { motion } from "framer-motion";
import {
  LaptopOutlined,
  CodeOutlined,
  RobotOutlined,
  ShoppingOutlined,
  ContainerOutlined,
} from "@ant-design/icons";
import styles from "./Projects.module.css";

const projects = [
  {
    name: "SalesDrive HotForm",
    company: "Iorta Solutions Technology",
    icon: <CodeOutlined />,
    description: "Dynamic form creation through drag and drop.",
  },
  {
    name: "SalesDrive ChatBot",
    company: "Iorta Solutions Technology",
    icon: <RobotOutlined />,
    description: "ChatBot for insurance leads processing.",
  },
  {
    name: "Bed Bath & Beyond",
    company: "Logixal Cloud Solutions Technology",
    icon: <ShoppingOutlined />,
    description: "E-commerce website development.",
  },
  {
    name: "Banking Management System",
    company: "VCM Technology",
    icon: <LaptopOutlined />,
    description: "Developed a comprehensive banking management system.",
  },
  {
    name: "Appu Pro",
    company: "VCM Technology",
    icon: <ContainerOutlined />,
    description: "Freight container allocation and tracking system.",
  },
];

const Projects = () => {
  return (
    <div className={styles.projectsContainer}>
      <h1 className="title">Projects</h1>
      <div className={styles.projectsList}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={styles.projectCard}
            whileHover={{ scale: [null, 1.2, 1.1] }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.iconContainer}>{project.icon}</div>
            <h2>{project.name}</h2>
            <h3>{project.company}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
