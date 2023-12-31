"use client";

import {AiOutlineMenu} from 'react-icons/ai';
import Avatar from '../Avatar';
import { useCallback, useState } from 'react';
import MenuItem from './MenuItem';

const UserMenu = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div
      className="relative"
    >
      <div
        className="
          flex
          flex-row
          items-center
          gap-3
        "
      >
        <div
          onClick={() => { }}
          className="
            hidden
            sm:block
            py-3
            px-4
            rounded-full
            text-sm
            font-semibold
            hover:bg-neutral-100
            hover:shadow-md
            transition
            cursor-pointer
          "
        >
          Add your Home
        </div>
        <div
          onClick={toggleOpen}
          className="
            p-4
            md:py-1
            md:px-2
            border-[1px]
            border-neutral-200
            flex
            flex-row
            items-center
            gap-3
            rounded-full
            cursor-pointer
            hover:shadow-md
            transition
          "
        >
          <AiOutlineMenu />
          <div
            className="
              hidden
              md:block
            "
          >
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && <div
        className="
          absolute
          rounded-xl
          top-12
          right-0
          w-[40vw]
          md:w-3/4
          shadow-md
          text-sm
          bg-white
          overflow-hidden
          transition
        "
      >
        <div
          className="
            flex
            flex-col
            cursor-pointer
          "
        >
          <>
            <MenuItem 
              onClick={() => {}}
              label = "Login"
            />
            <MenuItem 
              onClick={() => {}}
              label = "Sign Up"
            />
          </>

        </div>
      </div>}
    </div>
  );
}

export default UserMenu;