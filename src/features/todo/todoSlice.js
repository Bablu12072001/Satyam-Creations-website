import { createSlice, nanoid } from "@reduxjs/toolkit";
import { useState } from "react";

// Import for mix-items
import bed_side_table from '/src/assets/items/wall_hanger/1.jpg'
import wall_hanger_one from '/src/assets/items/wall_hanger_one/1.jpg'
import magazine_rack from '/src/assets/items/magazine_rack/2.jpg'
import bed_side_table_one from '/src/assets/items/bed_side_table_one/1.jpg'
import treasure_box from '/src/assets/items/01single_pic/treasure_box/1.jpg'
import ipad_tablet_stand from '/src/assets/items/ipad_tablet_stand/1.jpg'
import laptop_table from '/src/assets/items/laptop_table/2.jpg'
import folding_corner from '/src/assets/items/folding_corner/1.jpg'
import folding_corner_one from '/src/assets/items/folding_corner_one/1.jpg'
import side_board_cabinate from '/src/assets/items/side_board_cabinate/1.jpg'
import dinning_bench from '/src/assets/items/dinning_bench/1.jpg'
import coffee_table_set from '/src/assets/items/coffee_table_set/1.jpg'
import corner_table from '/src/assets/items/corner_table/1.jpg'

// Import for chair
import chair01 from '/src/assets/items/01single_pic/chair01/1.jpg'
import chair02 from '/src/assets/items/01single_pic/chair02/1.jpg'
import chair03 from '/src/assets/items/01single_pic/chair03/1.jpg'
import chair04 from '/src/assets/items/01single_pic/chair04/1.jpg'
import chair05 from '/src/assets/items/01single_pic/chair05/1.jpg'
import chair06 from '/src/assets/items/01single_pic/chair06/1.jpg'
import chair07 from '/src/assets/items/01single_pic/chair07/1.jpg'
import chair08 from '/src/assets/items/01single_pic/chair08/1.jpg'
import chair09 from '/src/assets/items/01single_pic/chair09/1.jpg'
import chair10 from '/src/assets/items/01single_pic/chair10/1.jpg'
import chair11 from '/src/assets/items/01single_pic/chair11/1.jpg'
import chair12 from '/src/assets/items/01single_pic/chair12/1.jpg'
import cane_chair from '/src/assets/items/chair/cane_char/1.jpg'
import chair from '/src/assets/items/chair/rounded_back_chair/2.jpg'


// Import for shoe rack
import shoe_rack01 from '/src/assets/items/01single_pic/shoe_rack01/1.jpg'
import shoe_rack02 from '/src/assets/items/01single_pic/shoe_rack02/1.jpg'
import shoe_rack03 from '/src/assets/items/01single_pic/shoe_rack03/1.jpg'
import shoe_rack04 from '/src/assets/items/01single_pic/shoe_rack04/1.jpg'
import shoe_rack05 from '/src/assets/items/01single_pic/shoe_rack05/1.jpg'
import shoe_rack06 from '/src/assets/items/01single_pic/shoe_rack06/1.jpg'
import shoe_rack07 from '/src/assets/items/01single_pic/shoe_rack07/1.jpg'
import shoe_rack08 from '/src/assets/items/01single_pic/shoe_rack08/1.jpg'
import shoe_rack09 from '/src/assets/items/01single_pic/shoe_rack09/1.jpg'
import shoe_rack10 from '/src/assets/items/01single_pic/shoe_rack10/1.jpg'

// Import for tv unit
import tv_unit01 from '/src/assets/items/01single_pic/tv_unit01/1.jpg'
import tv_unit02 from '/src/assets/items/01single_pic/tv_unit02/1.jpg'
import tv_unit03 from '/src/assets/items/01single_pic/tv_unit03/1.jpg'
import tv_unit04 from '/src/assets/items/01single_pic/tv_unit04/1.jpg'
import tv_unit05 from '/src/assets/items/01single_pic/tv_unit05/1.jpg'
import tv_unit06 from '/src/assets/items/01single_pic/tv_unit06/1.jpg'
import tv_unit07 from '/src/assets/items/01single_pic/tv_unit07/1.jpg'

// Import for sofa
import sofa_chair01 from '/src/assets/items/01single_pic/sofa_chair01/1.jpg'
import sofa_chair02 from '/src/assets/items/01single_pic/sofa_chair02/1.jpg'
import sofa_set01 from '/src/assets/items/01single_pic/sofa_set01/1.jpg'
import sofa_set02 from '/src/assets/items/01single_pic/sofa_set02/1.jpg'
import sofa_set03 from '/src/assets/items/01single_pic/sofa_set03/1.jpg'
import sofa_set04 from '/src/assets/items/01single_pic/sofa_set04/1.jpg'
import sofa_set05 from '/src/assets/items/01single_pic/sofa_set05/1.jpg'

// Import for mandir
import mandir from '/src/assets/items/mandir/1.jpg'
import mandir_one from '/src/assets/items/mandir_one/1.jpg'
import mandir01 from '/src/assets/items/01single_pic/mandir01/1.jpg'
import mandir02 from '/src/assets/items/01single_pic/mandir02/1.jpg'
import mandir03 from '/src/assets/items/01single_pic/mandir03/1.jpg'
import mandir04 from '/src/assets/items/01single_pic/mandir04/1.jpg'

// Import for center table 
import center_table from '/src/assets/items/center_table/2.jpg'
import center_table_one from '/src/assets/items/center_table_one/1.jpg'
import center_table01 from '/src/assets/items/01single_pic/center_table01/1.jpg'
import center_table02 from '/src/assets/items/01single_pic/center_table02/1.jpg'
import center_table03 from '/src/assets/items/01single_pic/center_table03/1.jpg'
import center_table04 from '/src/assets/items/01single_pic/center_table04/1.jpg'
import center_table05 from '/src/assets/items/01single_pic/center_table05/1.jpg'
import center_table06 from '/src/assets/items/01single_pic/center_table06/1.jpg'
import center_table07 from '/src/assets/items/01single_pic/center_table07/1.jpg'
import center_table08 from '/src/assets/items/01single_pic/center_table08/1.jpg'
import center_table09 from '/src/assets/items/01single_pic/center_table09/1.jpg'
import center_table10 from '/src/assets/items/01single_pic/center_table10/1.jpg'

// Import for dressing table 
import dressing_table01 from '/src/assets/items/01single_pic/dressing_table01/1.jpg'
import dressing_table02 from '/src/assets/items/01single_pic/dressing_table02/1.jpg'
import dressing_table03 from '/src/assets/items/01single_pic/dressing_table03/1.jpg'
import dressing_table04 from '/src/assets/items/01single_pic/dressing_table04/1.jpg'
import dressing_table05 from '/src/assets/items/01single_pic/dressing_table05/1.jpg'

// Import for bar cabinet
import bar_cabinet01 from '/src/assets/items/01single_pic/bar_cabinet01/1.jpg'
import bar_cabinet02 from '/src/assets/items/01single_pic/bar_cabinet02/1.jpg'
import bar_cabinet03 from '/src/assets/items/01single_pic/bar_cabinet03/1.jpg'
import bar_cabinet04 from '/src/assets/items/01single_pic/bar_cabinet04/1.jpg'

// Import for bed 
import bed01 from '/src/assets/items/01single_pic/bed01/1.jpg'
import bed02 from '/src/assets/items/01single_pic/bed02/1.jpg'
import bed03 from '/src/assets/items/01single_pic/bed03/1.jpg'
import bed04 from '/src/assets/items/01single_pic/bed04/1.jpg'
import bed05 from '/src/assets/items/01single_pic/bed05/1.jpg'
import bed06 from '/src/assets/items/01single_pic/bed06/1.jpg'
import bed07 from '/src/assets/items/01single_pic/bed07/1.jpg'
import bed08 from '/src/assets/items/01single_pic/bed08/1.jpg'
import bed09 from '/src/assets/items/01single_pic/bed09/1.jpg'
import bed10 from '/src/assets/items/01single_pic/bed10/1.jpg'

// Import for book shelf
import book_shelf01 from '/src/assets/items/01single_pic/book_shelf01/1.jpg'
import book_shelf02 from '/src/assets/items/01single_pic/book_shelf02/1.jpg'
import book_shelf03 from '/src/assets/items/01single_pic/book_shelf03/1.jpg'
import book_shelf04 from '/src/assets/items/01single_pic/book_shelf04/1.jpg'
import book_shelf05 from '/src/assets/items/01single_pic/book_shelf05/1.jpg'
import book_shelf06 from '/src/assets/items/01single_pic/book_shelf06/1.jpg'
import book_shelf07 from '/src/assets/items/01single_pic/book_shelf07/1.jpg'
import book_shelf08 from '/src/assets/items/01single_pic/book_shelf08/1.jpg'
import book_shelf09 from '/src/assets/items/01single_pic/book_shelf09/1.jpg'

//Import for cup board
import cup_board01 from '/src/assets/items/01single_pic/cup_board01/1.jpg'
import cup_board02 from '/src/assets/items/01single_pic/cup_board02/1.jpg'
import cup_board03 from '/src/assets/items/01single_pic/cup_board03/1.jpg'
import cup_board04 from '/src/assets/items/01single_pic/cup_board04/1.jpg'
import cup_board05 from '/src/assets/items/01single_pic/cup_board05/1.jpg'

// Import for dinning table 
import dinning_table01 from '/src/assets/items/01single_pic/dinning_table01/1.jpg'
import dinning_table02 from '/src/assets/items/01single_pic/dinning_table02/1.jpg'
import dinning_table03 from '/src/assets/items/01single_pic/dinning_table03/1.jpg'
import dinning_table04 from '/src/assets/items/01single_pic/dinning_table04/1.jpg'
import dinning_table05 from '/src/assets/items/01single_pic/dinning_table05/1.jpg'
import dinning_table06 from '/src/assets/items/01single_pic/dinning_table06/1.jpg'
import dinning_table07 from '/src/assets/items/01single_pic/dinning_table07/1.jpg'
import dinning_table08 from '/src/assets/items/01single_pic/dinning_table08/1.jpg'
import dinning_table09 from '/src/assets/items/01single_pic/dinning_table09/1.jpg'
import dinning_table10 from '/src/assets/items/01single_pic/dinning_table10/1.jpg'
import dinning_table11 from '/src/assets/items/01single_pic/dinning_table11/1.jpg'
import dinning_table12 from '/src/assets/items/01single_pic/dinning_table12/1.jpg'

// Import for japanise coffee table 
import japanise_coffee_table01 from '/src/assets/items/01single_pic/japanise_coffee_table01/1.jpg'
import japanise_coffee_table02 from '/src/assets/items/01single_pic/japanise_coffee_table02/1.jpg'
import japanise_coffee_table03 from '/src/assets/items/01single_pic/japanise_coffee_table03/1.jpg'
import japanise_coffee_table04 from '/src/assets/items/01single_pic/japanise_coffee_table04/1.jpg'
import japanise_coffee_table05 from '/src/assets/items/01single_pic/japanise_coffee_table05/1.jpg'
import japanise_coffee_table06 from '/src/assets/items/01single_pic/japanise_coffee_table06/1.jpg'

// Import for japanise dinning table
import japanise_dinning_table01 from '/src/assets/items/01single_pic/japanise_dinning_table01/1.jpg'
import japanise_dinning_table02 from '/src/assets/items/01single_pic/japanise_dinning_table02/1.jpg'
import japanise_dinning_table03 from '/src/assets/items/01single_pic/japanise_dinning_table03/1.jpg'

// Import for magazine rack
import magazine_rack01 from '/src/assets/items/01single_pic/magazine_rack01/1.jpg'
import magazine_rack02 from '/src/assets/items/01single_pic/magazine_rack02/1.jpg'

// Import for sofa cums bed 
import sofa_cum_bed01 from '/src/assets/items/01single_pic/sofa_cum_bed01/1.jpg'
import sofa_cum_bed from '/src/assets/items/sofa_cum_bed/1.jpg'
import sofa_cum_bed_one from '/src/assets/items/sofa_cum_bed_one/1.jpg'

// Import fpr side board cabinet
import side_board_cabinet01 from '/src/assets/items/01single_pic/side_board_cabinet01/1.jpg'
import side_board_cabinet02 from '/src/assets/items/01single_pic/side_board_cabinet02/1.jpg'
import side_board_cabinet03 from '/src/assets/items/01single_pic/side_board_cabinet03/1.jpg'
import side_board_cabinet04 from '/src/assets/items/01single_pic/side_board_cabinet04/1.jpg'
import side_board_cabinet05 from '/src/assets/items/01single_pic/side_board_cabinet05/1.jpg'
import side_board_cabinet06 from '/src/assets/items/01single_pic/side_board_cabinet06/1.jpg'
import side_board_cabinet07 from '/src/assets/items/01single_pic/side_board_cabinet07/1.jpg'
import side_board_cabinet08 from '/src/assets/items/01single_pic/side_board_cabinet08/1.jpg'
import side_board_cabinet09 from '/src/assets/items/01single_pic/side_board_cabinet09/1.jpg'
import side_board_cabinet10 from '/src/assets/items/01single_pic/side_board_cabinet10/1.jpg'
import side_board_cabinet11 from '/src/assets/items/01single_pic/side_board_cabinet11/1.jpg'


const initialState = {
    mix_item: [
        {
            id: 'bed_side_table',
            name: 'Bed side table',
            img1: bed_side_table
        },
        {
            id: 'wall_hanger_one',
            name: 'Wall hanger',
            img1: wall_hanger_one
        },
        {
            id: 'magazine_rack',
            name: 'Magazine rsck',
            img1: magazine_rack
        },
        {
            id: 'bed_side_table_one',
            name: 'Bed side table',
            img1: bed_side_table_one
        },
        {
            id: 'treasure_box',
            name: 'Treasure box',
            img1: treasure_box
        },
        {
            id: 'ipad_tablet_stand',
            name: 'Ipad/Tablet stand',
            img1: ipad_tablet_stand
        },
        {
            id: 'laptop_table',
            name: 'Laptop table',
            img1: laptop_table
        },
        {
            id: 'folding_corner',
            name: 'Folding corner',
            img1: folding_corner
        },
        {
            id: 'folding_corner_one',
            name: 'Folding corner',
            img1: folding_corner_one
        },
        {
            id: 'side_board_cabinet',
            name: 'Side board cabinet',
            img1: side_board_cabinate
        },
        {
            id: 'dinning_bench',
            name: 'Dinning bench',
            img1: dinning_bench
        },
        {
            id: 'coffee_table_set',
            name: 'Coffee table set',
            img1: coffee_table_set
        },
        {
            id: 'corner_table',
            name: 'Corner table',
            img1: corner_table
        },
    ],
    chair: [
        {
            id: 'chair01',
            name:"Chair",
            img1: chair01
        },
        {
            id: 'chair02',
            name:"Chair",
            img1: chair02
        },
        {
            id: 'chair03',
            name:"Chair",
            img1: chair03
        },
        {
            id: 'chair04',
            name:"Chair",
            img1: chair04
        },
        {
            id: 'chair05',
            name:"Chair",
            img1: chair05
        },
        {
            id: 'chair06',
            name:"Chair",
            img1: chair06
        },
        {
            id: 'chair07',
            name:"Chair",
            img1: chair07
        },
        {
            id: 'chair08',
            name:"Chair",
            img1: chair08
        },
        {
            id: 'chair09',
            name:"Chair",
            img1: chair09
        },
        {
            id: 'chair10',
            name:"Chair",
            img1: chair10
        },
        {
            id: 'chair11',
            name:"Chair",
            img1: chair11
        },
        {
            id: 'chair12',
            name:"Chair",
            img1: chair12
        },
        //
        {
            id: 'cane_chair',
            name:"Cane chair",
            img1: cane_chair
        },
        {
            id: 'chair',
            name:"Chair",
            img1: chair
        }
    ],
    shoe_rack: [
        {
            id: 'shoe_rack01',
            name: 'Shoe rack',
            img1: shoe_rack01
        },
        {
            id: 'shoe_rack02',
            name: 'Shoe rack',
            img1: shoe_rack02
        },
        {
            id: 'shoe_rack03',
            name: 'Shoe rack',
            img1: shoe_rack03
        },
        {
            id: 'shoe_rack04',
            name: 'Shoe rack',
            img1: shoe_rack04
        },
        {
            id: 'shoe_rack05',
            name: 'Shoe rack',
            img1: shoe_rack05
        },
        {
            id: 'shoe_rack06',
            name: 'Shoe rack',
            img1: shoe_rack06
        },
        {
            id: 'shoe_rack07',
            name: 'Shoe rack',
            img1: shoe_rack07
        },
        {
            id: 'shoe_rack08',
            name: 'Shoe rack',
            img1: shoe_rack08
        },
        {
            id: 'shoe_rack09',
            name: 'Shoe rack',
            img1: shoe_rack09
        },
        {
            id: 'shoe_rack10',
            name: 'Shoe rack',
            img1: shoe_rack10
        },
    ],
    tv_unit: [
        {
            id: 'tv_unit01',
            name: 'Tv unit',
            img1: tv_unit01
        },
        {
            id: 'tv_unit02',
            name: 'Tv unit',
            img1: tv_unit02
        },
        {
            id: 'tv_unit03',
            name: 'Tv unit',
            img1: tv_unit03
        },
        {
            id: 'tv_unit04',
            name: 'Tv unit',
            img1: tv_unit04
        },
        {
            id: 'tv_unit05',
            name: 'Tv unit',
            img1: tv_unit05
        },
        {
            id: 'tv_unit06',
            name: 'Tv unit',
            img1: tv_unit06
        },
        {
            id: 'tv_unit07',
            name: 'Tv unit',
            img1: tv_unit07
        },
    ],
    sofa: [
        {
            id:'sofa_chair01',
            name: 'Sofa chair',
            img1: sofa_chair01
        },
        {
            id:'sofa_chair02',
            name: 'Sofa chair',
            img1: sofa_chair02
        },
        {
            id:'sofa_set01',
            name: 'Sofa set',
            img1: sofa_set01
        },
        {
            id:'sofa_set02',
            name: 'Sofa set',
            img1: sofa_set02
        },
        {
            id:'sofa_set03',
            name: 'Sofa set',
            img1: sofa_set03
        },
        {
            id:'sofa_set04',
            name: 'Sofa set',
            img1: sofa_set04
        },
        {
            id:'sofa_set05',
            name: 'Sofa set',
            img1: sofa_set05
        },
    ],
    mandir: [
        {
            id:'mandir',
            name: 'Mandir',
            img1: mandir
        },
        {
            id:'mandir_one',
            name: 'Mandir',
            img1: mandir_one
        },
        {
            id:'mandir01',
            name: 'Mandir',
            img1: mandir01
        },
        {
            id:'mandir02',
            name: 'Mandir',
            img1: mandir02
        },
        {
            id:'mandir03',
            name: 'Mandir',
            img1: mandir03
        },
        {
            id:'mandir04',
            name: 'Mandir',
            img1: mandir04
        },
    ],
    center_table: [
        {
            id:'center_table',
            name: 'Center table',
            img1: center_table
        },
        {
            id:'center_table_one',
            name: 'Center table',
            img1: center_table_one
        },
        {
            id:'center_table01',
            name: 'Center table',
            img1: center_table01
        },
        {
            id:'center_table02',
            name: 'Center table',
            img1: center_table02
        },
        {
            id:'center_table03',
            name: 'Center table',
            img1: center_table03
        },
        {
            id:'center_table04',
            name: 'Center table',
            img1: center_table04
        },
        {
            id:'center_table05',
            name: 'Center table',
            img1: center_table05
        },
        {
            id:'center_table06',
            name: 'Center table',
            img1: center_table06
        },
        {
            id:'center_table07',
            name: 'Center table',
            img1: center_table07
        },
        {
            id:'center_table08',
            name: 'Center table',
            img1:center_table08
        },
        {
            id:'center_table09',
            name: 'Center table',
            img1: center_table09
        },
        {
            id:'center_table10',
            name: 'Center table',
            img1: center_table10
        },
    ],
    dressing_table: [
        {
            id: 'dressing_table01',
            name: 'Dressing table',
            img1: dressing_table01
        },
        {
            id: 'dressing_table02',
            name: 'Dressing table',
            img1: dressing_table02
        },
        {
            id: 'dressing_table03',
            name: 'Dressing table',
            img1: dressing_table03
        },
        {
            id: 'dressing_table04',
            name: 'Dressing table',
            img1: dressing_table04
        },
        {
            id: 'dressing_table05',
            name: 'Dressing table',
            img1: dressing_table05
        },
    ],
    bar_cabinet: [
        {
            id: 'bar_cabinet01',
            name: 'Bar cabinet',
            img1: bar_cabinet01
        },
        {
            id: 'bar_cabinet02',
            name: 'Bar cabinet',
            img1: bar_cabinet02
        },
        {
            id: 'bar_cabinet03',
            name: 'Bar cabinet',
            img1: bar_cabinet03
        },
        {
            id: 'bar_cabinet04',
            name: 'Bar cabinet',
            img1: bar_cabinet04
        },
    ],
    bed: [
        {
            id: 'bed01',
            name: 'Bed',
            img1: bed01
        },
        {
            id: 'bed02',
            name: 'Bed',
            img1: bed02
        },
        {
            id: 'bed03',
            name: 'Bed',
            img1: bed03
        },
        {
            id: 'bed04',
            name: 'Bed',
            img1: bed04
        },
        {
            id: 'bed05',
            name: 'Bed',
            img1: bed05
        },
        {
            id: 'bed06',
            name: 'Bed',
            img1: bed06
        },
        {
            id: 'bed07',
            name: 'Bed',
            img1: bed07
        },
        {
            id: 'bed08',
            name: 'Bed',
            img1: bed08
        },
        {
            id: 'bed09',
            name: 'Bed',
            img1: bed09
        },
        {
            id: 'bed10',
            name: 'Bed',
            img1: bed10
        },
    ],
    book_shelf: [
        {
            id: 'book_shelf01',
            name: 'Book shelf',
            img1: book_shelf01
        },
        {
            id: 'book_shelf02',
            name: 'Book shelf',
            img1: book_shelf02
        },
        {
            id: 'book_shelf03',
            name: 'Book shelf',
            img1: book_shelf03
        },
        {
            id: 'book_shelf04',
            name: 'Book shelf',
            img1: book_shelf04
        },
        {
            id: 'book_shelf05',
            name: 'Book shelf',
            img1: book_shelf05
        },
        {
            id: 'book_shelf06',
            name: 'Book shelf',
            img1: book_shelf06
        },
        {
            id: 'book_shelf07',
            name: 'Book shelf',
            img1: book_shelf07
        },
        {
            id: 'book_shelf08',
            name: 'Book shelf',
            img1: book_shelf08
        },
        {
            id: 'book_shelf09',
            name: 'Book shelf',
            img1: book_shelf09
        },
    ],
    cup_board: [
        {
            id: 'cup_board01',
            name: 'Cup board',
            img1: cup_board01
        },
        {
            id: 'cup_board02',
            name: 'Cup board',
            img1: cup_board02
        },
        {
            id: 'cup_board03',
            name: 'Cup board',
            img1: cup_board03
        },
        {
            id: 'cup_board04',
            name: 'Cup board',
            img1: cup_board04
        },
        {
            id: 'cup_board05',
            name: 'Cup board',
            img1: cup_board05
        },
    ],
    dinning_table: [
        {
            id: 'dinning_table01',
            name: 'Dinning table',
            img1: dinning_table01
        },
        {
            id: 'dinning_table02',
            name: 'Dinning table',
            img1: dinning_table02
        },
        {
            id: 'dinning_table03',
            name: 'Dinning table',
            img1: dinning_table03
        },
        {
            id: 'dinning_table04',
            name: 'Dinning table',
            img1: dinning_table04
        },
        {
            id: 'dinning_table05',
            name: 'Dinning table',
            img1: dinning_table05
        },
        {
            id: 'dinning_table06',
            name: 'Dinning table',
            img1: dinning_table06
        },
        {
            id: 'dinning_table07',
            name: 'Dinning table',
            img1: dinning_table07
        },
        {
            id: 'dinning_table08',
            name: 'Dinning table',
            img1: dinning_table08
        },
        {
            id: 'dinning_table09',
            name: 'Dinning table',
            img1: dinning_table09
        },
        {
            id: 'dinning_table10',
            name: 'Dinning table',
            img1: dinning_table10
        },
        {
            id: 'dinning_table11',
            name: 'Dinning table',
            img1: dinning_table11
        },
        {
            id: 'dinning_table12',
            name: 'Dinning table',
            img1: dinning_table12
        },
    ],
    japanise_coffee_table: [
        {
            id: 'japanise_coffee_table01',
            name: 'Japanise coffee table',
            img1: japanise_coffee_table01
        },
        {
            id: 'japanise_coffee_table02',
            name: 'Japanise coffee table',
            img1: japanise_coffee_table02
        },
        {
            id: 'japanise_coffee_table03',
            name: 'Japanise coffee table',
            img1: japanise_coffee_table03
        },
        {
            id: 'japanise_coffee_table04',
            name: 'Japanise coffee table',
            img1: japanise_coffee_table04
        },
        {
            id: 'japanise_coffee_table05',
            name: 'Japanise coffee table',
            img1: japanise_coffee_table05
        },
        {
            id: 'japanise_coffee_table06',
            name: 'Japanise coffee table',
            img1: japanise_coffee_table06
        },
    ],
    japanise_dinning_table: [
        {
            id:'japanise_dinning_table01',
            name: 'Japanise dinning table',
            img1: japanise_dinning_table01
        },
        {
            id:'japanise_dinning_table02',
            name: 'Japanise dinning table',
            img1: japanise_dinning_table02
        },
        {
            id:'japanise_dinning_table03',
            name: 'Japanise dinning table',
            img1: japanise_dinning_table03
        },
    ],
    magazine_rack: [
        {
            id: 'magazine_rack01',
            name: 'Magazine rack',
            img1: magazine_rack01
        },
        {
            id: 'magazine_rack02',
            name: 'Magazine rack',
            img1: magazine_rack02
        },
    ],
    sofa_cums_bed: [
        {
            id: 'sofa_cums_bed01',
            name: 'Sofa cums bed',
            img1: sofa_cum_bed01
        },
        {
            id: 'sofa_cums_bed02',
            name: 'Sofa cums bed',
            img1: sofa_cum_bed
        },
        {
            id: 'sofa_cums_bed03',
            name: 'Sofa cums bed',
            img1: sofa_cum_bed_one
        },
    ],
    sideboard_cabinet: [
        {
            id: 'sideboard_cabinet01',
            name: 'Sideboard cabinet',
            img1: side_board_cabinet01
        },
        {
            id: 'sideboard_cabinet02',
            name: 'Sideboard cabinet',
            img1: side_board_cabinet02
        },
        {
            id: 'sideboard_cabinet03',
            name: 'Sideboard cabinet',
            img1: side_board_cabinet03
        },
        {
            id: 'sideboard_cabinet04',
            name: 'Sideboard cabinet',
            img1: side_board_cabinet04
        },
        {
            id: 'sideboard_cabinet05',
            name: 'Sideboard cabinet',
            img1: side_board_cabinet05
        },
        {
            id: 'sideboard_cabinet06',
            name: 'Sideboard cabinet',
            img1: side_board_cabinet06
        },
        {
            id: 'sideboard_cabinet07',
            name: 'Sideboard cabinet',
            img1: side_board_cabinet07
        },
        {
            id: 'sideboard_cabinet08',
            name: 'Sideboard cabinet',
            img1: side_board_cabinet08
        },
        {
            id: 'sideboard_cabinet09',
            name: 'Sideboard cabinet',
            img1: side_board_cabinet09
        },
        {
            id: 'sideboard_cabinet10',
            name: 'Sideboard cabinet',
            img1: side_board_cabinet10
        },
        {
            id: 'sideboard_cabinet11',
            name: 'Sideboard cabinet',
            img1: side_board_cabinet11
        },
    ],
    
    cart: [
        
    ]
}

function sayHallo() {
    console.log('Say Hallo');
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        //addTodo: sayHallo,
        addTodo: (state, action) => {
            const cart = {
                id: action.payload.id,
                name: action.payload.name,
                img1: action.payload.imagePath1
            }
            state.cart.push(cart)
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },

    }

})

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer