import './index.css';
import whatsappIcon from './assets/imagens/whatsapp.png';
import InstaImage from './assets/imagens/insta.jpg'
import { Paper } from '@mui/material';

export default function Zap() {
  return (
    <Paper>
    <div className="insta-button">
      <a
        href="https://www.instagram.com/nubianovaesacademy/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={InstaImage} alt="Logo Instagram" className="whatsapp-icon" />        
      </a>      
    </div>  
    <div className="whatsapp-button">
      <a
        href="https://wa.me/5522988099371"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" />        
      </a>
      </div>
      </Paper>         
  );
  };



