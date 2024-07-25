import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div style={{ transform: menuOpen ? 'rotate(45deg)' : 'rotate(0)' }} />
        <div style={{ opacity: menuOpen ? '0' : '1' }} />
        <div style={{ transform: menuOpen ? 'rotate(-45deg)' : 'rotate(0)' }} />
      </div>
      <ul className={`${styles.navList} ${menuOpen ? styles.open : ''}`}>
        {['Home', 'About', 'Work', 'Contact'].map((item, index) => (
          <motion.li
            key={item}
            className={styles.navItem}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.1 }}
          >
            <Link 
              to={item.toLowerCase()} 
              spy={true} 
              smooth={true} 
              duration={500} 
              className={styles.navLink}
              onClick={toggleMenu}
            >
              {item}
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
