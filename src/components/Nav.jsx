
import { anvil2 } from '../assets/images';
import { navLinks } from '../constants';
import { hamburger } from '../assets/icons';


const Nav = () => {

    // const [collapse, setSidebarCollapse] = useState(false);

  return (
    <header className='px-2 py-2 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href='/'>
                <img src={anvil2} 
                    alt='Logo'
                    width={100}
                    height={29}
                />
            <h2 className='text-xl text-blue-500 font-bold'>TITANFORGED APPAREL</h2>
            </a>
            <ul className='flex-1 flex justify-center items-center gap-8 max-lg:hidden'>
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a
                            href={item.href}
                            className='font-montserrat leading-normal text-lg text-slate-gray'
                        >
                             {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="hidden max-lg:block [] ">
               <button >
                <img 
                    src={hamburger}
                    alt='hamburger'
                    width={25}
                    height={25}
                />

                </button>
            </div>
            <div>
                <div> 

                </div>
            </div>
        </nav>
    </header>
  )
}

export default Nav