import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react'

export function Widget() {
  return (
    <Popover className='absolute bottom-3 right-4'>
      <Popover.Panel>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aspernatur recusandae voluptas quo, nulla nesciunt iure reiciendis exercitationem distinctio velit architecto et modi totam quibusdam accusamus dolore. Quo, tempora asperiores.</Popover.Panel>

      <Popover.Button className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'>
        <ChatTeardropDots className='w-6 h-6'/>

        <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
          <span className='pl-2'></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>  
  )
}