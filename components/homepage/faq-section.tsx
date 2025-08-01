import { FaqItem } from './faq-accordion';

export const FaqSection = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-16'>
      <div className='w-2xs col-span-2 mx-6 mt-16'>
        <img src="../../src/assets/homepage/genie.png" alt="FAQ 1" className="w-full object-cover" />
      </div>
      <div className='col-span-4 space-y-6 flex flex-col'>
        <h1 className='text-8xl font-bold mb-4 text-[#CB9834] text-shadow-lg' style={{ fontFamily: 'Ondine, serif' }}>FAQs</h1>
        <FaqItem question='anything about events?' answer='orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat' />
        <FaqItem question='anything about events?' answer='orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat' />
        <FaqItem question='anything about events?' answer='orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat' />
        <FaqItem question='anything about events?' answer='orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat' />
      </div>
    </div>
  )
}
