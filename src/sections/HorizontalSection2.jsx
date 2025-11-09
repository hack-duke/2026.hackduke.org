import bg from '/bg-horizontal.svg';
import stairs from '/stairs.svg';
import side2Floor from '/side-2-floor.svg';

//TODO: rn looks ugly bc stairs super small, also separate out the floor from stairs 
export default function HorizontalSection2() {
  return (
    <div
      style={{
        position: 'relative', // this makes it a positioning context
        width: '100%',
        height: '400px',      // give it some height
        overflow: 'hidden',   // optional: hides overflow if images are large
      }}
    >
      {/* Background image */}
      <img
        src={bg}
        alt="Background"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      {/* Stairs image overlay */}
      <img
        src={stairs}
        alt="Stairs"
        style={{
          position: 'absolute',
          top: '50%',     // adjust positioning as needed
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '200px', // or whatever fits your layout
        }}
      />
    </div>
  );
}
