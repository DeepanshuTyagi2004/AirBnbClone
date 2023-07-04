"use client";

import {BiSearch} from 'react-icons/bi';

const Search = () => {
    return ( 
        <div
            className="
                border-[1px]
                w-auto
                py-2
                rounded-full
                shadow-sm
                hover:shadow-md
                transition
                cursor-pointer
            "
        >
            <div
                className="
                    flex
                    flex-row
                    items-center
                    justify-between
                "
            >
                <div
                    className="
                        text-sm
                        font-bold
                        px-6
                    "
                >
                    AnyWhere
                </div>
                <div
                    className="
                        hidden
                        sm:block
                        text-sm
                        font-bold
                        px-6
                        flex-1
                        border-x-[1px]
                        text-center
                    "
                >
                    Any Week
                </div>
                <div
                    className="
                        flex
                        flex-row
                        pl-6
                        pr-2
                        gap-3
                        items-center
                        text-sm
                        text-grey-600
                    "
                >
                    <div 
                        className="
                            hidden
                            sm:block
                        "
                    >
                        Add Guests
                    </div>
                    <div
                        className="
                            p-2
                            bg-rose-500
                            rounded-full
                            text-white
                        "
                    >
                        <BiSearch size={18} />
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default Search;