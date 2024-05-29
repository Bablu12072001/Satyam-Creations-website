import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "./itemsSlice";

const ItemList = ({ category }) => {
  const items = useSelector((state) => state.items[category]);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItem({ category, id }));
  };

  return (
    <div>
      <h2>{category.replace("_", " ")}</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            {item.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={item.name}
                width={100}
                height={100}
              />
            ))}
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
