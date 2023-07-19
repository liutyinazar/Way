import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_wrapper">
        <div className="footer_menu">
          <a href="/#" className="footer_item">
            FAQ
          </a>
          <a href="/#" className="footer_item">
            Privacy Policy
          </a>
          <a href="/#" className="footer_item">
            Public offer
          </a>
          <a href="/#" className="footer_item">
            Instagram
          </a>
        </div>
        <div className="footer_title">
          <p>© 2023 WAYYOUCHOOSE. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
