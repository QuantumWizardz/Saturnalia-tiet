export const EventCard = ()=>{
  return (
    <div className="w-full flex justify-center mt-20">
      <div className="w-2xs h-md relative bg-red-500">
        <img
          src="../../src/assets/homepage/event_card_bg.png"
          alt="Home Button"
          className="object-cover h-auto w-full"
        />

        <div className='absolute inset-0 flex items-center justify-center text-white text-3xl'>
          Hello
        </div>
      </div>
    </div>
  )
}

