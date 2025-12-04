import './FoodShelfSection.css';
import bgSvg from '../assets/bg.svg';
import catSvg from '../assets/cat.svg';
import chalkBoardSvg from '../assets/chalk_board.svg';
import chipsSvg from '../assets/chips.svg';
import feb1Svg from '../assets/feb_1.svg';
import hotFoodSvg from '../assets/hot_food.svg';
import jan31Svg from '../assets/jan_31.svg';
import overlaysSvg from '../assets/overlays.svg';
import plantPotSvg from '../assets/plant_pot.svg';
import pockySvg from '../assets/pocky.svg';
import ramenGroupSvg from '../assets/ramen_group.svg';
import shelfSvg from '../assets/shelf.svg';
import shrimpChipsSvg from '../assets/shrimp_chips.svg';

export default function FoodShelfSection() {
  return (
    <div className="fs-strip">
      <div className="fs-bg" />

      <div className="fs-row">
        <div className="fs-cell">
          <div className="fs-scene">
            {/* Background */}
            <div className="food-item bg">
              <img src={bgSvg} alt="Background" />
            </div>

            {/* Background shelf */}
            <div className="food-item shelf-back">
              <img src={shelfSvg} alt="Shelf" />
            </div>

            {/* Food items on shelves */}
            <div className="food-item ramen">
              <img src={ramenGroupSvg} alt="Ramen" />
            </div>

            <div className="food-item pocky">
              <img src={pockySvg} alt="Pocky" />
            </div>

            <div className="food-item potato">
              <img src={chipsSvg} alt="Potato Chips" />
            </div>

            <div className="food-item shrimp">
              <img src={shrimpChipsSvg} alt="Shrimp Chips" />
            </div>

            <div className="food-item hot-food">
              <img src={hotFoodSvg} alt="Hot Food" />
            </div>

            {/* Decorative items */}
            <div className="food-item cat">
              <img src={catSvg} alt="Cat" />
            </div>

            <div className="food-item chalk-board">
              <img src={chalkBoardSvg} alt="Chalk Board" />
            </div>

            <div className="food-item plant-pot">
              <img src={plantPotSvg} alt="Plant Pot" />
            </div>

            <div className="food-item jan-31">
              <img src={jan31Svg} alt="January 31" />
            </div>

            <div className="food-item feb-1">
              <img src={feb1Svg} alt="February 1" />
            </div>

            <div className="food-item overlays">
              <img src={overlaysSvg} alt="Overlays" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}