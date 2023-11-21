import { getFullYear, getFooterCopy } from '../utils/utils';
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy("isIndex")}
        </p>
      </footer>
    </>
  );
}

export default Footer;