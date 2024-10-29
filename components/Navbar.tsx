import React from 'react';
import { useRouter } from 'next/router';
import { Box } from '@radix-ui/themes';


interface Props {
  hidden?: boolean;
  onClickClose?: () => void;
}

export const Navbar = ({
  hidden = true,
  onClickClose
}: Props) => {
  const { push,  } = useRouter()


  

  return (
    <div
      className={`fixed z-10 w-3/4 sm:w-3/4 sm:pl-12 ${hidden ? "-left-full" : "left-0"} transition-all duration-500 top-0 h-screen`}
    >
      <div className="bg-white flex-col pl-7 pt-7 pb-5 pr-7 lg:pr-14 max-h-screen overflow-y-auto h-screen">
        <Box className="flex gap-10 items-center">
          <button
            onClick={onClickClose}
            className="mb-10 right-5 sm:left-0"
          >
            {/* <Image
              className="rounded-full absolute sm:left-0 top-9 w-7 h-7 cursor-pointer"
              alt="close-icon"
              height={10}
              width={10}
              src='/blackClose.svg'
            /> */}
          </button>
        </Box>
        
        <ul className='flex flex-col gap-5 mt-7'>
          <li onClick={() => push("/")} className='text-black10 text-xl font-semibold cursor-pointer hover:text-maincolor'>Əsas</li>
          <li onClick={() => push("/tickets")} className='text-black10 text-xl font-semibold cursor-pointer hover:text-maincolor'>Biletlər</li>
          <li onClick={() => push("/visa")} className='text-black10 text-xl font-semibold cursor-pointer hover:text-maincolor'>Viza</li>
          <li onClick={() => push("/transfer")} className='text-black10 text-xl font-semibold cursor-pointer hover:text-maincolor'>Transfer</li>
        </ul>
      </div>
    </div>
  )
}
