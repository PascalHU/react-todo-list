import "./footer.css";
const Footer = ({ language, where, who }) => {
  return (
    <footer>
      Made with <a href={language}> React </a> at
      <a href={where}> Le Reacteur</a> by <a href={who}> Pascal HU</a>
    </footer>
  );
};
export default Footer;
