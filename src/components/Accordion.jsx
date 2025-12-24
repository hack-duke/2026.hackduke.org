import { useState } from 'react';
import './Accordion.css';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion-list">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
          index={index}
        />
      ))}
    </div>
  );
}

function AccordionItem({ title, content, isOpen, onClick, index }) {
  return (
    <div className="accordion-item">
      <div
        className={`accordion-title ${index % 2 === 0 ? 'accordion-title-even' : 'accordion-title-odd'}`}
        onClick={onClick}
      >
        <span>{title}</span>
        <span className="accordion-icon">{isOpen ? '−' : '+'}</span>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <div className="accordion-content-inner">
            {content}
          </div>
        </div>
      )}
    </div>
  );
}
