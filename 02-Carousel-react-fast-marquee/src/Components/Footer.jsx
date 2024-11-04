import FooterCarousel from './FooterCarousel';
import FooterContent from './FooterContent';

const Footer = ({ showCarousel = true, showContent = true }) => {
  return (
    <footer>
      {showCarousel && <FooterCarousel />}
      {showContent && <FooterContent />}
    </footer>
  );
};

export default Footer;
