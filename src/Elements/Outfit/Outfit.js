import React from 'react';

import classes from './Outfit.Module.css'

const Outfit = ({getRandomItem, itemLevel1, itemLevel2, itemLevel3, divLevel1, divLevel2, divLevel3}) => {
  return ( 
    <div className={classes.Outfit}>
      <div className={classes.Level1} onClick={() => getRandomItem(1)} ref={divLevel1}
      style={itemLevel1.imageURL ? {backgroundImage: "url('" + itemLevel1.imageURL + "')"} : {}}>
      {itemLevel1.image && <img src={`data:image/jpg;base64,${itemLevel1.image}`}/>}
      </div>

      <div className={classes.Level2} onClick={() => getRandomItem(2)} ref={divLevel2}
      style={itemLevel2.imageURL ? {backgroundImage: "url('" + itemLevel2.imageURL + "')"} : {}}>
      {itemLevel2.image && <img src={`data:image/jpg;base64,${itemLevel2.image}`}/>}
      </div>

      <div className={classes.Level3} onClick={() => getRandomItem(3)} ref={divLevel3}
      style={itemLevel3.imageURL ? {backgroundImage: "url('" + itemLevel3.imageURL + "')"} : {}}>
      {itemLevel3.image && <img src={`data:image/jpg;base64,${itemLevel3.image}`}/>}
      </div>
    </div>
  );
}

export default Outfit;