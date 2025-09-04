import { motion } from 'framer-motion';
import LogoLoop from "../../animations/logo loop/LogoLoop";

const SkillItem = ({ name, level }) => {
  const getLevelColor = () => {
    if (level >= 4) return '#10B981'; // Green
    if (level >= 3) return '#F59E0B'; // Yellow
    return '#EF4444'; // Red
  };

  const styles = {
    skillItem: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      width: '100%',
      padding: '12px',
      background: 'var(--surface-color)',
      border: '1px solid var(--border-color)',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      borderRadius: '0',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
      }
    },
    skillHeader: { 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center' 
    },
    skillName: { 
      fontSize: '0.9rem', 
      fontWeight: 500,
      color: 'var(--text-primary)'
    },
    skillLevel: {
      fontSize: '0.8rem',
      fontWeight: 600,
      color: getLevelColor()
    },
    progressBar: {
      height: '6px',
      background: 'rgba(0, 0, 0, 0.1)',
      borderRadius: '0',
      overflow: 'hidden',
      marginTop: '4px'
    },
    progressFill: {
      width: `${(level / 5) * 100}%`,
      height: '100%',
      background: getLevelColor(),
      borderRadius: '0',
      transition: 'width 0.5s ease, background 0.3s ease'
    }
  };

  return (
    <div style={styles.skillItem}>
      <div style={styles.skillHeader}>
        <span style={styles.skillName}>{name}</span>
        <span style={styles.skillLevel}>
          {level >= 4 ? 'Advanced' : level >= 3 ? 'Intermediate' : 'Beginner'}
        </span>
      </div>
      <div style={styles.progressBar}>
        <div style={styles.progressFill} />
      </div>
    </div>
  );
};

const Skills = () => {
  // Styles
  const styles = {
    skillsSection: {
      padding: '80px 0',
      background: 'var(--background-color)',
      position: 'relative',
      overflow: 'hidden',
      '& *': {
        borderRadius: '0 !important'
      }
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
      position: 'relative',
      zIndex: 1
    },
    header: {
      textAlign: 'center',
      marginBottom: '60px'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 700,
      margin: '0 0 15px 0',
      color: 'var(--text-primary)',
      position: 'relative',
      display: 'inline-block',
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '-10px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '80px',
        height: '4px',
        background: 'var(--primary-color)',
        borderRadius: '2px'
      }
    },
    subtitle: {
      fontSize: '1.1rem',
      color: 'var(--text-secondary)',
      maxWidth: '700px',
      margin: '0 auto',
      lineHeight: 1.6
    },
    skillSection: {
      marginBottom: '60px',
      position: 'relative'
    },
    sectionTitle: {
      fontSize: '1.5rem',
      marginBottom: '20px',
      color: 'var(--text-primary)',
      fontWeight: 600,
      position: 'relative',
      paddingLeft: '15px'
    },
    logoContainer: {
      height: '100px',
      margin: '20px 0 40px',
      position: 'relative'
    },
    skillsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '15px',
      width: '100%',
      '& *': {
        borderRadius: '0 !important'
      }
    },
    highlightCard: {
      background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.05) 0%, rgba(0, 0, 0, 0) 100%)',
      border: '1px solid rgba(0, 212, 255, 0.1)',
      borderRadius: '0',
      padding: '30px',
      marginTop: '40px',
      position: 'relative',
      overflow: 'hidden'
    },
    highlightTitle: {
      fontSize: '1.3rem',
      fontWeight: 600,
      margin: '0 0 15px 0',
      color: 'var(--text-primary)'
    },
    highlightText: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: 'var(--text-secondary)',
      margin: 0
    }
  };

  const frontendTech = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 4.5 },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', level: 4, invert: true },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', level: 4 },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 4.5 },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', level: 5 },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', level: 4.5 },
  ];

  const backendTech = [
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', level: 4 },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', level: 4, invert: true },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', level: 4 },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', level: 3.5 },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', level: 3.5 },
    { name: 'REST API', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg', level: 4.5 },
    { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', level: 3.5 },
  ];

  const tools = [
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', level: 4.5 },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', level: 4.5, invert: true },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', level: 3.5 },
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', level: 5 },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', level: 4 },
    { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', level: 4.5 },
  ];

  const createLogos = (techArray) => 
    techArray.map((tech, index) => ({
      node: (
        <div 
          key={`${tech.name}-${index}`}
          style={{ 
            width: '50px', 
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '5px',
            transition: 'transform 0.2s ease'
          }}
        >
          <img 
            src={tech.icon} 
            alt={tech.name}
            style={{ 
              width: '100%', 
              height: 'auto',
              filter: tech.invert ? 'invert(100%)' : 'none',
              opacity: 0.9,
              transition: 'all 0.2s ease'
            }} 
          />
        </div>
      ),
      title: tech.name
    }));

  const frontendLogos = createLogos(frontendTech);
  const backendLogos = createLogos(backendTech);
  const toolsLogos = createLogos(tools);

  const renderSkillSection = (title, logos, items, reverse = false) => (
    <motion.div
      style={styles.skillSection}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <h3 style={styles.sectionTitle}>
        {title}
      </h3>
      
      <div style={styles.logoContainer}>
        <LogoLoop
          logos={logos}
          speed={10}
          direction={title.includes('Backend') ? 'right' : 'left'}
          logoHeight={60}
          gap={60}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#000000"
          ariaLabel={`${title} technologies`}
        />
      </div>
      
      <div style={styles.skillsGrid}>
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <SkillItem name={item.name} level={item.level} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="skills" style={styles.skillsSection}>
      <div style={styles.container}>
        <motion.div
          style={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 style={styles.title}>Skills & Expertise</h2>
          <p style={styles.subtitle}>
            Here are the technologies and tools I work with on a daily basis.
          </p>
        </motion.div>
        
        {renderSkillSection('Frontend Development', frontendLogos, frontendTech)}
        {renderSkillSection('Backend Development', backendLogos, backendTech)}
        {renderSkillSection('Tools & Platforms', toolsLogos, tools, true)}
      </div>
    </section>
  )
}

export default Skills

