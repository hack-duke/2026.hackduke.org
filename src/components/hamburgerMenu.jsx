import './hamburgerMenu.css';

export default function HamburgerMenu({ open, onToggle }) {
  return (
    <button
      className={`hamburger-trigger ${open ? 'open' : ''}`}
      aria-label="Toggle menu"
      aria-expanded={open}
      onClick={onToggle}
    >
      <span />
      <span />
      <span />
    </button>
  );
}