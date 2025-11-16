import './VerticalSection.css';

const VerticalSection = ({ children, backgroundColor, textColor = 'white', className = '', height, style }) => {
  return (
    <section
      className={`vertical-section ${className}`}
      style={{
        backgroundColor,
        color: textColor,
        ...(height ? { height } : {}),
        ...(style || {})
      }}
    >
      <div className="vertical-content">
        {children}
      </div>
    </section>
  );
};

export default VerticalSection;
