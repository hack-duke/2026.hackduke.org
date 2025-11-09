import './applyButton.css';
import applyBg from '../assets/applyBg.svg';
import applyText from '../assets/applyText.svg'; 
        
export default function applyButton() {
  return (
        <div className="apply-container-app">
          <img src={applyBg} alt="Apply Background" className="apply-bg-app" />
          <button className="apply-button-app"><img src={applyText} alt="Apply" /></button>
        </div>
  );
}
