import React from 'react'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { Link } from "react-router-dom";
import ItemCard from '../ItemCard/ItemCard';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useSelector, useDispatch } from 'react-redux'
import banner from '/src/assets/banner.jpg'

//import {removeTodo} from '../features/todo/todoSlice'

export default function Home() {

    const chairVar = useSelector(state => state.chair)
    const shoeVar = useSelector(state => state.shoe_rack)
    const tvVar = useSelector(state => state.tv_unit)
    const sofaVar = useSelector(state => state.sofa)
    const mandirVar = useSelector(state => state.mandir)
    const center_tableVar = useSelector(state => state.center_table)
    const dressing_tableVar = useSelector(state => state.dressing_table)
    const bar_cabinetVar = useSelector(state => state.bar_cabinet)
    const bedVar = useSelector(state => state.bed)
    const book_sghelfVar = useSelector(state => state.book_shelf)
    const cup_boardVar = useSelector(state => state.cup_board)
    const dinning_tableVar = useSelector(state => state.dinning_table)
    const japanise_coffee_tableVar = useSelector(state => state.japanise_coffee_table)
    const japanise_dinning_tableVar = useSelector(state => state.japanise_dinning_table)
    const magazine_rackVar = useSelector(state => state.magazine_rack)
    const sofa_cums_bedVar = useSelector(state => state.sofa_cums_bed)
    const sideboard_cabinetVar = useSelector(state => state.sideboard_cabinet)
    const mix_itemVar = useSelector(state => state.mix_item)


    //const dispatch = useDispatch()

    // if (categories.selectedOption == 'All Categories') {
    //     console.log(categories.selectedOption);
    //     return (
    //         <div className='bg-rose'>
    //             saddam
    //         </div>
    //     )
    // }

    return (
        <div className="mx-auto w-full max-w-7xl mb-10 mt-2">
            {/* <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    
                </div>
            </aside> */}

            {/* <div className='bg-green w-full'>
                <img className='w-full h-72' src={banner} alt="banner" />
            </div> */}

            

            {/* =================================== All Categories ======================================= */}

            {/* Rounded Back Chair */}
            <div className="grid grid-cols-1 lg:grid-cols-4 md:gap-2 lg:gap-4 place-items-center lg:place-items-center mt-10">

            {mix_itemVar.map((todo) => (
                    <ItemCard name={todo.name} imagePath1={todo.img1} id={todo.id} />
                ))}

                {/* ============================ Chair ============================ */}

                {chairVar.map((todo) => (
                    <ItemCard name={todo.name} imagePath1={todo.img1} id={todo.id} />
                ))}


                {/* ============================ Shue Rack  ============================ */}

                {shoeVar.map((todo) => (
                    <ItemCard name={todo.name} imagePath1={todo.img1} id={todo.id} />
                ))}

                
                {/* ============================ Tv-Unit ============================ */}


                {tvVar.map((todo) => (
                    <ItemCard name={todo.name} imagePath1={todo.img1} id={todo.id} />
                ))}


                {/* ============================ Sofa Set and single ============================ */}

                {sofaVar.map((todo) => (
                    <ItemCard name={todo.name} imagePath1={todo.img1} id={todo.id} />
                ))}


                {/* ============================ Mandir ============================ */}

                {mandirVar.map((todo) => (
                    <ItemCard name={todo.name} imagePath1={todo.img1} id={todo.id} />
                ))}
                

                {/* ============================ Center Table ============================ */}

                {center_tableVar.map((todo) => (
                    <ItemCard name={todo.name} imagePath1={todo.img1} id={todo.id} />
                ))}


                {/* ============================ Dtressing Table ============================ */}

                {dressing_tableVar.map((todo) => (
                    <ItemCard name={todo.name} imagePath1={todo.img1} id={todo.id} />
                ))}


                {/* ============================ Bar Cabinet ============================ */}

                {bar_cabinetVar.map((todo) => (
                    <ItemCard name={todo.name} imagePath1={todo.img1} id={todo.id} />
                ))}


                {/* ============================ Bed ============================ */}

                {bedVar.map((todo) => (
                    <ItemCard name={todo.name} imagePath1={todo.img1} id={todo.id} />
                ))}


                {/* ============================ Book Shelf ============================ */}

                {book_sghelfVar.map((todo) => (
                    <ItemCard name={todo.name} imagePath1={todo.img1} id={todo.id} />
                ))}


                {/* ============================ Cup Board ============================ */}
                
                {cup_boardVar.map((todo) => (
                    <ItemCard name={todo.name} imagePath1={todo.img1} id={todo.id} />
                ))}


                {/* ============================ Dinning Table ============================ */}

                {dinning_tableVar.map((todo) => (
                    <ItemCard name={todo.name} imagePath1={todo.img1} id={todo.id} />
                ))}


                {/* ============================ Japanise Coffee Table ============================ */}

                {japanise_coffee_tableVar.map((todo) => (
                    <ItemCard name={todo.name} imagePath1={todo.img1} id={todo.id} />
                ))}


                {/* ============================ Japanise Dinning Table ============================ */}

                {japanise_dinning_tableVar.map((todo) => (
                    <ItemCard name={todo.name} imagePath1={todo.img1} id={todo.id} />
                ))}


                {/* ============================ Magazine Rack ============================ */}

                {magazine_rackVar.map((todo) => (
                    <ItemCard name={todo.name} imagePath1={todo.img1} id={todo.id} />
                ))}


                {/* ============================ Sofa Cum Bed ============================ */}

                {sofa_cums_bedVar.map((todo) => (
                    <ItemCard name={todo.name} imagePath1={todo.img1} id={todo.id} />
                ))}


                {/* ============================ Side Board Cabinet ============================ */}

                {sideboard_cabinetVar.map((todo) => (
                    <ItemCard name={todo.name} imagePath1={todo.img1} id={todo.id} />
                ))}

            </div>
            


        </div>
    );
}

