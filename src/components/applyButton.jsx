import './applyButton.css';
import applyBg from '../assets/applyBg.svg';
import applyText from '../assets/applyText.svg';

export default function ApplyButton({ className = '' }) {
  return (
    <div className={`apply-container ${className}`}>
      <img src={applyBg} alt="" className="apply-bg" />
      <a href="/apply">
        <img src={applyText} alt="Apply" className="apply-button"/>
      </a>
    </div>
  );
}
