import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} width={773} height={687} className="object-contain" />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'
        > Arise, and claim our limited time<span className='text-blue-500'> Special-Offer </span>
        <span className='text-blue-500'></span> 
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil at quam voluptatum optio perspiciatis exercitationem nesciunt laborum itaque inventore odio eligendi iste culpa nulla, nostrum facere necessitatibus error! Laboriosam, nulla?
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
        <Button label="Shop Now" iconURL={arrowRight} />
        <Button label='Learn More' backgroundColor='bg-white' borderColor='border-slate-gray' textColor='text-slate-gray' />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers