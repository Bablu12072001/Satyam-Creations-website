import { createSlice } from "@reduxjs/toolkit";

// Import for mix-items
import bed_side_table from "/src/assets/items/bed_side_table/Bed Side Table - Modern Simple.jpg";
import bed_side_table1 from "/src/assets/items/bed_side_table/Bed Side Table - Classic.jpg";
import wall_hanger_one from "/src/assets/items/wall_hanger/Wall Hanger - 88 (1).jpg";
import wall_hanger_one1 from "/src/assets/items/wall_hanger/Wall Hanger - Classic (2).jpg";
import wall_hanger_one2 from "/src/assets/items/wall_hanger/Wall Hanger - Open Zig Zag (2).jpg";
import wall_hanger_one3 from "/src/assets/items/wall_hanger/Wall Hanger - Honey Bridge (1).jpg";
import wall_hanger_one4 from "/src/assets/items/wall_hanger/Wall Hanger - Hut 2.jpg";
import wall_hanger_one5 from "/src/assets/items/wall_hanger/Wall Hanger - Zig Zag (2).jpg";

import laptop_table from "/src/assets/items/laptop_table/Laptop Cum Study Table - Classic (1).jpg";
import laptop_table1 from "/src/assets/items/laptop_table/Computer Table cum Study Table - Classic (2).jpg";
import laptop_table2 from "/src/assets/items/laptop_table/Computer Table cum Study Table - Classic (3).jpg";
import laptop_table3 from "/src/assets/items/laptop_table/Computer Table cum Study Table - Classic.jpg";
import laptop_table4 from "/src/assets/items/laptop_table/Laptop Cum iPad Stand - Classic (1).png";
import laptop_table5 from "/src/assets/items/laptop_table/Laptop Cum iPad Stand - Classic (2).png";
import laptop_table6 from "/src/assets/items/laptop_table/Laptop Cum Study Table - Classic (2).jpg";
import laptop_table7 from "/src/assets/items/laptop_table/Laptop Cum Study Table - Classic (3).jpg";
import laptop_table8 from "/src/assets/items/laptop_table/Laptop Cum Study Table - Classic (4).jpg";
import laptop_table9 from "/src/assets/items/laptop_table/Laptop Cum Study Table - Classic (5).jpg";
import laptop_table10 from "/src/assets/items/laptop_table/Study Table - Single Drawer (1).jpg";
import laptop_table11 from "/src/assets/items/laptop_table/Study Table - Single Drawer (2).jpg";

import side_board_cabinate from "/src/assets/items/side_board_cabinate/Sideboard Cabinet - Tiles (Ceramic) - 2 Door 2 Drawer (1).jpg";
import side_board_cabinate11 from "/src/assets/items/side_board_cabinate/Sideboard Cabinet - 3D 1 - 2 Door 2 Drawer (2).jpg";
import side_board_cabinate1 from "/src/assets/items/side_board_cabinate/Sideboard Cabinet - Bakhra - 3 Door 3 Drawer (2).jpg";
import side_board_cabinate2 from "/src/assets/items/side_board_cabinate/Sideboard Cabinet - Dalla - 2 Door 2 Drawer (3).jpg";
import side_board_cabinate3 from "/src/assets/items/side_board_cabinate/Sideboard Cabinet - Dalla - 3 Door 3 Drawer (3).jpg";
import side_board_cabinate4 from "/src/assets/items/side_board_cabinate/Sideboard Cabinet - Deco - 2 Door 2 Drawer.jpg";
import side_board_cabinate5 from "/src/assets/items/side_board_cabinate/Sideboard Cabinet - Diamond - 2 Door 2 Drawer.jpg";
import side_board_cabinate6 from "/src/assets/items/side_board_cabinate/Sideboard Cabinet - Diamond - 3 Door 3 Drawer (3).jpg";
import side_board_cabinate7 from "/src/assets/items/side_board_cabinate/Sideboard Cabinet - Imperial - 2 Door 3 Drawer (4).jpg";
import side_board_cabinate8 from "/src/assets/items/side_board_cabinate/Sideboard Cabinet - LT & Tiles (Ceramic) - 3 Door 3 Drawer.jpg";
import side_board_cabinate9 from "/src/assets/items/side_board_cabinate/Sideboard Cabinet - Niwar - 3 Door 3 Drawer (2).jpg";
import side_board_cabinate10 from "/src/assets/items/side_board_cabinate/Sideboard Cabinet - Tiles (Ceramic) - 3 Door 3 Drawer (7).jpg";
import dinning_bench from "/src/assets/items/dinning_bench/Dining Set  - Kuber Dining Chokdi Chair (1).jpg";
import dinning_bench1 from "/src/assets/items/dinning_bench/Dining Set  - Paan Dining Set.jpg";
import dinning_bench2 from "/src/assets/items/dinning_bench/Dining Set  - with Chokdi Chair (3).jpg";
import dinning_bench3 from "/src/assets/items/dinning_bench/Dining Set  - with Urban Chair (1).jpg";
import dinning_bench4 from "/src/assets/items/dinning_bench/Dining Set  - with Urban Chair (3).jpg";
import dinning_bench5 from "/src/assets/items/dinning_bench/Dining Set  - with Urban Chair (4).jpg";
import dinning_bench6 from "/src/assets/items/dinning_bench/Dining Set  - Poster Chair Holla Dining (2).jpg";
import dinning_bench7 from "/src/assets/items/dinning_bench/Japanese Dining Table Set - Full Jalia (3).jpg";
import dinning_bench8 from "/src/assets/items/dinning_bench/Japanese Dining Table Set - Half Jalia (4).jpg";
import dinning_bench9 from "/src/assets/items/dinning_bench/Japanese Dining Table Set - Jalebi (1).jpg";
import coffee_table_set from "/src/assets/items/coffee_table_set/Japanese Coffee Table Set - Center Tile Top - Cushion Stool (2).jpg";

import coffee_table_set2 from "/src/assets/items/coffee_table_set/Japanese Coffee Table Set - Disco Box.jpg";
import coffee_table_set3 from "/src/assets/items/coffee_table_set/Japanese Coffee Table Set - LT - Clasic Stool - Cushion Top.jpg";
import coffee_table_set4 from "/src/assets/items/coffee_table_set/Japanese Coffee Table Set - Molder with Storage (2).jpg";
import coffee_table_set5 from "/src/assets/items/coffee_table_set/Japanese Coffee Table Set - Molder with Storage (3) - Copy.jpg";

import corner_table from "/src/assets/items/corner_table/Corner - Stairs (3).jpg";
import corner_table1 from "/src/assets/items/corner_table/Corner - Folding (3).jpg";
import corner_table2 from "/src/assets/items/corner_table/Corner - Stairs (4).jpg";
import corner_table3 from "/src/assets/items/corner_table/Corner Table - 3.jpg";
import corner_table4 from "/src/assets/items/corner_table/Corner Table - Glass & Jalia.jpg";
import corner_table5 from "/src/assets/items/corner_table/Luggage Table - Holla (1).jpg";
import corner_table6 from "/src/assets/items/corner_table/Magazine Rack - CIA.jpg";
import corner_table7 from "/src/assets/items/corner_table/Magazine Rack - Open.jpg";
import corner_table8 from "/src/assets/items/corner_table/Magazine Rack - Open.jpg";
import corner_table9 from "/src/assets/items/corner_table/Magazine Stand - Jackson (2).jpg";
import corner_table10 from "/src/assets/items/corner_table/Magazine Stand - Jackson (3).jpg";

// Import for chair
import chair01 from "/src/assets/items/01single_pic/chair01/Chair - Chokdi (1).jpeg";
import chair02 from "/src/assets/items/01single_pic/chair01/Chair - Chokdi (4).jpg";
import chair03 from "/src/assets/items/01single_pic/chair01/Chair - Hijeck.jpeg";
import chair04 from "/src/assets/items/01single_pic/chair01/Chair - Poster (2).jpeg";
import chair05 from "/src/assets/items/01single_pic/chair01/Chair - Urban (1).jpeg";
import chair06 from "/src/assets/items/01single_pic/chair01/Chair - Urban (1).jpg";
import chair07 from "/src/assets/items/01single_pic/chair01/Chair - Urban (2).jpg";

// Import for shoe rack
import shoe_rack01 from "/src/assets/items/01single_pic/shoe_rack01/Shoe Rack - Modern (3).jpg";
import shoe_rack02 from "/src/assets/items/01single_pic/shoe_rack01/Shoe Rack - Classic - 2 Door 2 Drawer (2).jpg";
import shoe_rack03 from "/src/assets/items/01single_pic/shoe_rack01/Shoe Rack - Classic - 2 Door 2 Drawer (4).jpg";
import shoe_rack04 from "/src/assets/items/01single_pic/shoe_rack01/Shoe Rack - Classic - 3 Door (1).jpg";
import shoe_rack05 from "/src/assets/items/01single_pic/shoe_rack01/Shoe Rack - Modern (4).jpg";
import shoe_rack06 from "/src/assets/items/01single_pic/shoe_rack01/Shoe Rack - Open (3).jpg";

// Import for tv unit
import tv_unit01 from "/src/assets/items/01single_pic/tv_unit01/TVC Unit - Classic - Niwar.jpg";
import tv_unit02 from "/src/assets/items/01single_pic/tv_unit01/TVC Unit - Classic - Diamond.jpg";
import tv_unit03 from "/src/assets/items/01single_pic/tv_unit01/TVC Unit - Classic - Tiles (Ceramic) (2).jpg";

// Import for sofa
import sofa_chair01 from "/src/assets/items/01single_pic/sofa_set01/Sofa Cum Bed - Magazine - Low Dec Classic (1).jpg";
import sofa_chair02 from "/src/assets/items/01single_pic/sofa_set01/Sofa Cum Bed - Magazine - Low Dec Classic (1).jpg";
import sofa_chair03 from "/src/assets/items/01single_pic/sofa_set01/Baby Bed cum 2 Seater Sofa.jpg";
import sofa_chair04 from "/src/assets/items/01single_pic/sofa_set01/Sofa Cum Bed - Magazine - Low Dec Classic (4).jpg";
import sofa_chair05 from "/src/assets/items/01single_pic/sofa_set01/Sofa Cum Bed - Magazine - Moon Side (1).jpg";
import sofa_chair06 from "/src/assets/items/01single_pic/sofa_set01/Sofa Cum Bed - Magazine - Moon Side (2).jpg";
import sofa_chair07 from "/src/assets/items/01single_pic/sofa_set01/Sofa Cum Bed - Niwar.jpg";
import sofa_chair08 from "/src/assets/items/01single_pic/sofa_set01/Sofa Set - Classic - 5 Seater.jpg";
import sofa_chair09 from "/src/assets/items/01single_pic/sofa_set01/Sofa Set - LT - 5 Seater (1).jpg";
import sofa_chair010 from "/src/assets/items/01single_pic/sofa_set01/Sofa Set - Striker - 5 Seater (7).jpg";

// Import for mandir
import mandir from "/src/assets/items/mandir/Mandir - Om Swastik Om (4).jpg";
import mandir1 from "/src/assets/items/mandir/Mandir - Big (6).jpg";
import mandir2 from "/src/assets/items/mandir/Mandir - Om Swastik Om.jpg";
import mandir3 from "/src/assets/items/mandir/Mandir - Small (2).jpg";

// Import for center table
import center_table from "/src/assets/items/center_table/Center Table - Borromean Rings (4).jpg";
import center_table1 from "/src/assets/items/center_table/Center Table - 1 D Table (3).jpg";
import center_table2 from "/src/assets/items/center_table/Center Table - Classic Jalia Table (2).jpg";
import center_table3 from "/src/assets/items/center_table/Center Table - Kuber (1).jpg";

// Import for dressing table
import dressing_table01 from "/src/assets/items/01single_pic/dressing_table01/1.jpg";
import dressing_table02 from "/src/assets/items/01single_pic/dressing_table02/1.jpg";
import dressing_table03 from "/src/assets/items/01single_pic/dressing_table03/1.jpg";
import dressing_table04 from "/src/assets/items/01single_pic/dressing_table04/1.jpg";
import dressing_table05 from "/src/assets/items/01single_pic/dressing_table05/1.jpg";

// Import for bar cabinet
import bar_cabinet01 from "/src/assets/items/01single_pic/bar_cabinet01/1.jpg";
import bar_cabinet02 from "/src/assets/items/01single_pic/bar_cabinet02/1.jpg";
import bar_cabinet03 from "/src/assets/items/01single_pic/bar_cabinet03/1.jpg";
import bar_cabinet04 from "/src/assets/items/01single_pic/bar_cabinet04/1.jpg";

// Import for bed
import bed01 from "/src/assets/items/01single_pic/bed01/1.jpg";
import bed02 from "/src/assets/items/01single_pic/bed02/1.jpg";
import bed03 from "/src/assets/items/01single_pic/bed03/1.jpg";
import bed04 from "/src/assets/items/01single_pic/bed04/1.jpg";
import bed05 from "/src/assets/items/01single_pic/bed05/1.jpg";
import bed06 from "/src/assets/items/01single_pic/bed06/1.jpg";
import bed07 from "/src/assets/items/01single_pic/bed07/1.jpg";
import bed08 from "/src/assets/items/01single_pic/bed08/1.jpg";
import bed09 from "/src/assets/items/01single_pic/bed09/1.jpg";
import bed10 from "/src/assets/items/01single_pic/bed10/1.jpg";

// Import for book shelf
import book_shelf01 from "/src/assets/items/01single_pic/book_shelf01/Book Shelf - Zig Zag.jpg";
import book_shelf010 from "/src/assets/items/01single_pic/book_shelf01/1.jpg";
import book_shelf02 from "/src/assets/items/01single_pic/book_shelf02/1.jpg";
import book_shelf03 from "/src/assets/items/01single_pic/book_shelf03/1.jpg";
import book_shelf04 from "/src/assets/items/01single_pic/book_shelf04/1.jpg";
import book_shelf05 from "/src/assets/items/01single_pic/book_shelf05/1.jpg";
import book_shelf06 from "/src/assets/items/01single_pic/book_shelf06/1.jpg";
import book_shelf07 from "/src/assets/items/01single_pic/book_shelf07/1.jpg";
import book_shelf08 from "/src/assets/items/01single_pic/book_shelf08/1.jpg";
import book_shelf09 from "/src/assets/items/01single_pic/book_shelf09/1.jpg";

//Import for cup board
import cup_board01 from "/src/assets/items/01single_pic/cup_board01/1.jpg";
import cup_board02 from "/src/assets/items/01single_pic/cup_board02/1.jpg";
import cup_board03 from "/src/assets/items/01single_pic/cup_board03/1.jpg";
import cup_board04 from "/src/assets/items/01single_pic/cup_board04/1.jpg";
import cup_board05 from "/src/assets/items/01single_pic/cup_board05/1.jpg";

// Import for dinning table
import dinning_table01 from "/src/assets/items/01single_pic/dinning_table01/1.jpg";
import dinning_table02 from "/src/assets/items/01single_pic/dinning_table02/1.jpg";
import dinning_table03 from "/src/assets/items/01single_pic/dinning_table03/1.jpg";
import dinning_table04 from "/src/assets/items/01single_pic/dinning_table04/1.jpg";
import dinning_table05 from "/src/assets/items/01single_pic/dinning_table05/1.jpg";
import dinning_table06 from "/src/assets/items/01single_pic/dinning_table06/1.jpg";
import dinning_table07 from "/src/assets/items/01single_pic/dinning_table07/1.jpg";
import dinning_table08 from "/src/assets/items/01single_pic/dinning_table08/1.jpg";
import dinning_table09 from "/src/assets/items/01single_pic/dinning_table09/1.jpg";
import dinning_table10 from "/src/assets/items/01single_pic/dinning_table10/1.jpg";
import dinning_table11 from "/src/assets/items/01single_pic/dinning_table11/1.jpg";
import dinning_table12 from "/src/assets/items/01single_pic/dinning_table12/1.jpg";

// Import for japanise dinning table
import japanise_dinning_table01 from "/src/assets/items/01single_pic/japanise_dinning_table01/1.jpg";
import japanise_dinning_table02 from "/src/assets/items/01single_pic/japanise_dinning_table02/1.jpg";
import japanise_dinning_table03 from "/src/assets/items/01single_pic/japanise_dinning_table03/1.jpg";

// Import for magazine rack

// Import for sofa cums bed
import sofa_cum_bed01 from "/src/assets/items/01single_pic/sofa_cum_bed01/1.jpg";
import sofa_cum_bed from "/src/assets/items/sofa_cum_bed/1.jpg";
import sofa_cum_bed_one from "/src/assets/items/sofa_cum_bed_one/1.jpg";

const initialState = {
  mix_item: [
    {
      id: "bed_side_table",
      name: "Bed Side Table",
      img1: [bed_side_table, bed_side_table1],
    },

    {
      id: "laptop_table",
      name: "Computer , Laptop & Study Table",
      img1: [
        laptop_table,
        laptop_table1,
        laptop_table2,
        laptop_table3,
        laptop_table4,
        laptop_table5,
        laptop_table6,
        laptop_table7,
        laptop_table8,
        laptop_table9,
        laptop_table10,
        laptop_table11,
      ],
    },

    {
      id: "side_board_cabinet",
      name: "Side Board Cabinet",
      img1: [
        side_board_cabinate,
        side_board_cabinate1,
        side_board_cabinate2,
        side_board_cabinate3,
        side_board_cabinate4,
        side_board_cabinate5,
        side_board_cabinate6,
        side_board_cabinate7,
        side_board_cabinate8,
        side_board_cabinate9,
        side_board_cabinate10,
        side_board_cabinate11,
      ],
    },
    {
      id: "dinning_bench",
      name: "Dining Set",
      img1: [
        dinning_bench,
        dinning_bench1,
        dinning_bench2,
        dinning_bench3,
        dinning_bench4,
        dinning_bench5,
        dinning_bench6,

        dinning_bench7,
        dinning_bench8,
        dinning_bench9,
      ],
    },
    {
      id: "coffee_table_set",
      name: "Coffee Table Set",
      img1: [
        coffee_table_set,

        coffee_table_set2,
        coffee_table_set3,
        coffee_table_set4,
        coffee_table_set5,
      ],
    },
    {
      id: "corner_table",
      name: "Corner Tables & Folding Corners",
      img1: [
        corner_table,
        corner_table1,
        corner_table2,
        corner_table3,
        corner_table4,
        corner_table5,
        corner_table6,
        corner_table7,
        corner_table8,
        corner_table9,
        corner_table10,
      ],
    },
  ],
  chair: [
    {
      id: "chair01",
      name: "Dining Chair",
      img1: [chair01, chair02, chair03, chair04, chair05, chair06, chair07],
    },
  ],
  shoe_rack: [
    {
      id: "shoe_rack01",
      name: "Shoe Rack",
      img1: [
        shoe_rack06,
        shoe_rack02,
        shoe_rack03,
        shoe_rack04,
        shoe_rack05,
        shoe_rack01,
      ],
    },
    // {
    //   id: "shoe_rack02",
    //   name: "Shoe rack",
    //   img1: shoe_rack02,
    // },
    // {
    //   id: "shoe_rack03",
    //   name: "Shoe rack",
    //   img1: shoe_rack03,
    // },
    // {
    //   id: "shoe_rack04",
    //   name: "Shoe rack",
    //   img1: shoe_rack04,
    // },
    // {
    //   id: "shoe_rack05",
    //   name: "Shoe rack",
    //   img1: shoe_rack05,
    // },
    // {
    //   id: "shoe_rack06",
    //   name: "Shoe rack",
    //   img1: shoe_rack06,
    // },
    // {
    //   id: "shoe_rack07",
    //   name: "Shoe rack",
    //   img1: shoe_rack07,
    // },
    // {
    //   id: "shoe_rack08",
    //   name: "Shoe rack",
    //   img1: shoe_rack08,
    // },
    // {
    //   id: "shoe_rack09",
    //   name: "Shoe rack",
    //   img1: shoe_rack09,
    // },
    // {
    //   id: "shoe_rack10",
    //   name: "Shoe rack",
    //   img1: shoe_rack10,
    // },
  ],
  tv_unit: [
    {
      id: "tv_unit01",
      name: "TV Unit",
      img1: [tv_unit01, tv_unit02, tv_unit03],
    },
    // {
    //   id: "tv_unit02",
    //   name: "Tv unit",
    //   img1: tv_unit02,
    // },
    // {
    //   id: "tv_unit03",
    //   name: "Tv unit",
    //   img1: tv_unit03,
    // },
    // {
    //   id: "tv_unit04",
    //   name: "Tv unit",
    //   img1: tv_unit04,
    // },
    // {
    //   id: "tv_unit05",
    //   name: "Tv unit",
    //   img1: tv_unit05,
    // },
    // {
    //   id: "tv_unit06",
    //   name: "Tv unit",
    //   img1: tv_unit06,
    // },
    // {
    //   id: "tv_unit07",
    //   name: "Tv unit",
    //   img1: tv_unit07,
    // },
  ],
  sofa: [
    {
      id: "sofa_chair01",
      name: "Sofa & Sofa cum Bed",
      img1: [
        sofa_chair01,
        sofa_chair02,
        sofa_chair03,
        sofa_chair04,
        sofa_chair05,
        sofa_chair06,
        sofa_chair07,
        sofa_chair08,
        sofa_chair09,
        sofa_chair010,
      ],
    },
    // {
    //   id: "sofa_chair02",
    //   name: "Sofa chair",
    //   img1: sofa_chair02,
    // },
    // {
    //   id: "sofa_set01",
    //   name: "Sofa set",
    //   img1: sofa_set01,
    // },
    // {
    //   id: "sofa_set02",
    //   name: "Sofa set",
    //   img1: sofa_set02,
    // },
    // {
    //   id: "sofa_set03",
    //   name: "Sofa set",
    //   img1: sofa_set03,
    // },
    // {
    //   id: "sofa_set04",
    //   name: "Sofa set",
    //   img1: sofa_set04,
    // },
    // {
    //   id: "sofa_set05",
    //   name: "Sofa set",
    //   img1: sofa_set05,
    // },
  ],
  mandir: [
    {
      id: "mandir",
      name: "Mandir",
      img1: [mandir, mandir1, mandir2, mandir3],
    },
  ],
  center_table: [
    {
      id: "center_table",
      name: "Center Table",
      img1: [center_table, center_table1, center_table2, center_table3],
    },
  ],
  dressing_table: [
    {
      id: "dressing_table01",
      name: "Dressing Table",
      img1: [
        dressing_table01,
        dressing_table02,
        dressing_table03,
        dressing_table04,
        dressing_table05,
      ],
    },
  ],
  bar_cabinet: [
    {
      id: "bar_cabinet01",
      name: "Bar Cabinet",
      img1: [bar_cabinet01, bar_cabinet02, bar_cabinet03, bar_cabinet04],
    },
  ],
  bed: [
    {
      id: "bed01",
      name: "Bed",
      img1: [
        bed01,
        bed02,
        bed03,
        bed04,
        bed05,
        bed06,
        bed07,
        bed08,
        bed09,
        bed10,
      ],
    },
  ],
  book_shelf: [
    {
      id: "book_shelf01",
      name: "Book Shelf",
      img1: [
        book_shelf01,
        book_shelf02,
        book_shelf03,
        book_shelf04,
        book_shelf04,
        book_shelf05,
        book_shelf06,
        book_shelf07,
        book_shelf08,
        book_shelf09,
        book_shelf010,
      ],
    },
  ],
  cup_board: [
    {
      id: "cup_board01",
      name: "Cupboard",
      img1: [cup_board01, cup_board02, cup_board03, cup_board04, cup_board05],
    },
  ],
  dinning_table: [
    {
      id: "dinning_table01",
      name: "Dining Table",
      img1: [
        dinning_table08,
        dinning_table02,
        dinning_table03,
        dinning_table04,
        dinning_table05,
        dinning_table06,
        dinning_table07,
        dinning_table01,
        dinning_table09,
        dinning_table10,
        dinning_table11,
        dinning_table12,
        japanise_dinning_table01,
        japanise_dinning_table02,
        japanise_dinning_table03,
      ],
    },
  ],
  //   japanise_coffee_table: [
  //     {
  //       id: "japanise_coffee_table01",
  //       name: "Japanise coffee table",
  //       img1: japanise_coffee_table01,
  //     },
  //     {
  //       id: "japanise_coffee_table02",
  //       name: "Japanise coffee table",
  //       img1: japanise_coffee_table02,
  //     },
  //     {
  //       id: "japanise_coffee_table03",
  //       name: "Japanise coffee table",
  //       img1: japanise_coffee_table03,
  //     },
  //     {
  //       id: "japanise_coffee_table04",
  //       name: "Japanise coffee table",
  //       img1: japanise_coffee_table04,
  //     },
  //     {
  //       id: "japanise_coffee_table05",
  //       name: "Japanise coffee table",
  //       img1: japanise_coffee_table05,
  //     },
  //     {
  //       id: "japanise_coffee_table06",
  //       name: "Japanise coffee table",
  //       img1: japanise_coffee_table06,
  //     },
  //   ],
  japanise_dinning_table: [
    {
      id: "japanise_dinning_table01",
      name: "Japanise dining table",
      img1: japanise_dinning_table01,
    },
    //   {
    //     id: "japanise_dinning_table02",
    //     name: "Japanise dinning table",
    //     img1: japanise_dinning_table02,
    //   },
    //   {
    //     id: "japanise_dinning_table03",
    //     name: "Japanise dinning table",
    //     img1: japanise_dinning_table03,
    //   },
  ],
  //   magazine_rack: [
  //     {
  //       id: "magazine_rack01",
  //       name: "Magazine rack",
  //       img1: magazine_rack01,
  //     },
  //     {
  //       id: "magazine_rack02",
  //       name: "Magazine rack",
  //       img1: magazine_rack02,
  //     },
  //   ],
  sofa_cums_bed: [
    {
      id: "sofa_cums_bed01",
      name: "Sofa cum bed",
      img1: [sofa_cum_bed, sofa_cum_bed01, sofa_cum_bed_one],
    },
    // {
    //   id: "sofa_cums_bed02",
    //   name: "Sofa cums bed",
    //   img1: sofa_cum_bed,
    // },
    // {
    //   id: "sofa_cums_bed03",
    //   name: "Sofa cums bed",
    //   img1: sofa_cum_bed_one,
    // },
  ],
  sideboard_cabinet: [
    {
      id: "sideboard_cabinet01",
      name: "Wall Hanger",
      img1: [
        wall_hanger_one,
        wall_hanger_one1,
        wall_hanger_one2,
        wall_hanger_one3,
        wall_hanger_one4,
        wall_hanger_one5,
      ],
    },
    // {
    //   id: "sideboard_cabinet02",
    //   name: "Sideboard cabinet",
    //   img1: side_board_cabinet02,
    // },
    // {
    //   id: "sideboard_cabinet03",
    //   name: "Sideboard cabinet",
    //   img1: side_board_cabinet03,
    // },
    // {
    //   id: "sideboard_cabinet04",
    //   name: "Sideboard cabinet",
    //   img1: side_board_cabinet04,
    // },
    // {
    //   id: "sideboard_cabinet05",
    //   name: "Sideboard cabinet",
    //   img1: side_board_cabinet05,
    // },
    // {
    //   id: "sideboard_cabinet06",
    //   name: "Sideboard cabinet",
    //   img1: side_board_cabinet06,
    // },
    // {
    //   id: "sideboard_cabinet07",
    //   name: "Sideboard cabinet",
    //   img1: side_board_cabinet07,
    // },
    // {
    //   id: "sideboard_cabinet08",
    //   name: "Sideboard cabinet",
    //   img1: side_board_cabinet08,
    // },
    // {
    //   id: "sideboard_cabinet09",
    //   name: "Sideboard cabinet",
    //   img1: side_board_cabinet09,
    // },
    // {
    //   id: "sideboard_cabinet10",
    //   name: "Sideboard cabinet",
    //   img1: side_board_cabinet10,
    // },
    // {
    //   id: "sideboard_cabinet11",
    //   name: "Sideboard cabinet",
    //   img1: side_board_cabinet11,
    // },
  ],

  cart: [],
};

function sayHallo() {
  console.log("Say Hallo");
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    //addTodo: sayHallo,
    addTodo: (state, action) => {
      const cart = {
        id: action.payload.id,
        name: action.payload.name,
        img1: action.payload.imagePath1,
      };
      state.cart.push(cart);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
