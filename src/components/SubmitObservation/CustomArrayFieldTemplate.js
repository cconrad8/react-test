// Import necessary libraries
import React from 'react';

// Custom ArrayFieldTemplate to handle custom text for buttons
const CustomArrayFieldTemplate = (props) => {
  return (
    <div className="array-field">
      {props.items && props.items.map((element) => (
        <div key={element.index} className="array-item">
          <div>{element.children}</div>
          <div className="array-item-buttons">
            {element.hasMoveUp && (
              <button
                type="button"
                onClick={element.onReorderClick(element.index, element.index - 1)}
              >
                Move Up
              </button>
            )}
            {element.hasMoveDown && (
              <button
                type="button"
                onClick={element.onReorderClick(element.index, element.index + 1)}
              >
                Move Down
              </button>
            )}
            {element.hasRemove && (
              <button
                type="button"
                onClick={element.onDropIndexClick(element.index)}
              >
                Remove
              </button>
            )}
          </div>
        </div>
      ))}
      {props.canAdd && (
        <div className="array-item-add">
          <button type="button" onClick={props.onAddClick}>Add</button>
        </div>
      )}
    </div>
  );
};

export default CustomArrayFieldTemplate;
