import bg from '/bg-horizontal.svg';
import table from '/table.svg';

export default function HorizontalSection2() {
  return (
    <div
      style={{
        position: 'relative',
        minHeight: '400px'
      }}
    >

      {/* Background image */}
      <img
        src={bg}
        alt="Background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      <img
        src={table}
        alt="Table"
        style={{
          position: 'absolute',
          bottom: '20%',     // adjust positioning as needed
          transform: 'translateX(-50%)', // Centering correction
          width: '80%', 
        }}
      />

    </div>
  );
}
