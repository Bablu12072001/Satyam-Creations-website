import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ItemCard from "../ItemCard/ItemCard";
import ItemDetail from "../ItemDetail/ItemDetail";
import banner from "/src/assets/banner.jpg";

export default function Home() {
  const chairVar = useSelector((state) => state.chair);
  const shoeVar = useSelector((state) => state.shoe_rack);
  const tvVar = useSelector((state) => state.tv_unit);
  const sofaVar = useSelector((state) => state.sofa);
  const mandirVar = useSelector((state) => state.mandir);
  const center_tableVar = useSelector((state) => state.center_table);
  const dressing_tableVar = useSelector((state) => state.dressing_table);
  const bar_cabinetVar = useSelector((state) => state.bar_cabinet);
  const bedVar = useSelector((state) => state.bed);
  const book_sghelfVar = useSelector((state) => state.book_shelf);
  const cup_boardVar = useSelector((state) => state.cup_board);
  const dinning_tableVar = useSelector((state) => state.dinning_table);
  const japanise_coffee_tableVar = useSelector(
    (state) => state.japanise_coffee_table
  );
  const japanise_dinning_tableVar = useSelector(
    (state) => state.japanise_dinning_table
  );
  const magazine_rackVar = useSelector((state) => state.magazine_rack);
  const sofa_cums_bedVar = useSelector((state) => state.sofa_cums_bed);
  const sideboard_cabinetVar = useSelector((state) => state.sideboard_cabinet);
  const mix_itemVar = useSelector((state) => state.mix_item);

  return (
    <div className="mx-auto w-full max-w-7xl mb-10 mt-2">
      {/* Banner */}
      {/* <div className='bg-green w-full'>
        <img className='w-full h-72' src={banner} alt="banner" />
      </div> */}

      {/* All Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-4 md:gap-2 lg:gap-4 place-items-center lg:place-items-center mt-10">
        {mix_itemVar.map((item) => (
          <ItemCard
            key={item.id}
            name={item.name}
            imagePath1={item.img1}
            id={item.id}
          />
        ))}

        {chairVar.map((item) => (
          <ItemCard
            key={item.id}
            name={item.name}
            imagePath1={item.img1}
            id={item.id}
          />
        ))}

        {shoeVar.map((item) => (
          <ItemCard
            key={item.id}
            name={item.name}
            imagePath1={item.img1}
            id={item.id}
          />
        ))}

        {tvVar.map((item) => (
          <ItemCard
            key={item.id}
            name={item.name}
            imagePath1={item.img1}
            id={item.id}
          />
        ))}

        {sofaVar.map((item) => (
          <ItemCard
            key={item.id}
            name={item.name}
            imagePath1={item.img1}
            id={item.id}
          />
        ))}

        {mandirVar.map((item) => (
          <ItemCard
            key={item.id}
            name={item.name}
            imagePath1={item.img1}
            id={item.id}
          />
        ))}

        {center_tableVar.map((item) => (
          <ItemCard
            key={item.id}
            name={item.name}
            imagePath1={item.img1}
            id={item.id}
          />
        ))}

        {dressing_tableVar.map((item) => (
          <ItemCard
            key={item.id}
            name={item.name}
            imagePath1={item.img1}
            id={item.id}
          />
        ))}

        {bar_cabinetVar.map((item) => (
          <ItemCard
            key={item.id}
            name={item.name}
            imagePath1={item.img1}
            id={item.id}
          />
        ))}

        {bedVar.map((item) => (
          <ItemCard
            key={item.id}
            name={item.name}
            imagePath1={item.img1}
            id={item.id}
          />
        ))}

        {book_sghelfVar.map((item) => (
          <ItemCard
            key={item.id}
            name={item.name}
            imagePath1={item.img1}
            id={item.id}
          />
        ))}

        {cup_boardVar.map((item) => (
          <ItemCard
            key={item.id}
            name={item.name}
            imagePath1={item.img1}
            id={item.id}
          />
        ))}

        {dinning_tableVar.map((item) => (
          <ItemCard
            key={item.id}
            name={item.name}
            imagePath1={item.img1}
            id={item.id}
          />
        ))}

        {/* Uncomment these lines if you need them */}
        {/* {japanise_coffee_tableVar.map((item) => (
          <ItemCard key={item.id} name={item.name} imagePath1={item.img1} id={item.id} />
        ))}

        {japanise_dinning_tableVar.map((item) => (
          <ItemCard key={item.id} name={item.name} imagePath1={item.img1} id={item.id} />
        ))}

        {magazine_rackVar.map((item) => (
          <ItemCard key={item.id} name={item.name} imagePath1={item.img1} id={item.id} />
        ))} */}

        {/* {sofa_cums_bedVar.map((item) => (
          <ItemCard
            key={item.id}
            name={item.name}
            imagePath1={item.img1}
            id={item.id}
          />
        ))} */}

        {sideboard_cabinetVar.map((item) => (
          <ItemCard
            key={item.id}
            name={item.name}
            imagePath1={item.img1}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}
