import { FaqItem } from './faq-accordion';

export const FaqSection = () => {
  return (
    <div className='flex' style={{ minHeight: '600px' }}>
      <div className='flex flex-[0.4] justify-center items-center' style={{ height: '600px', minHeight: '600px' }}>
        <img src="../../src/assets/homepage/genie.png" alt="FAQ 1" className="w-auto h-[80%]" style={{ maxHeight: '480px', height: '80%', objectFit: 'contain' }} />
      </div>
      <div className='col-span-4 space-y-6 flex flex-col flex-[0.6] pr-10'>
        <p className='text-[8rem] align- font-bold text-[#CB9834] text-shadow-lg' style={{ fontFamily: 'Ondine, serif',margin:'0px' }}>FAQs</p>
        <FaqItem question='anything about events?' answer='orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat' />
        <FaqItem question='anything about events?' answer='orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat' />
        <FaqItem question='anything about events?' answer='orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat' />
        <FaqItem question='anything about events?' answer='orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat' />
      </div>
    </div>
  )
}
