import websiteImg1 from '../assets/portfolio.png'
import websiteImg2 from '../assets/slider.png'
import websiteImg3 from '../assets/chocolate.png'
import websiteImg4 from '../assets/ecommerce.png'
export default function Projects() {
    return (
    <section className="flex flex-col px-5 py-20 justify-center bg_sec">
        <div className="w-1/2 ">
            <div className="flex justify-center mb-10 ">
                <h1 className=' text-4xl font-bold border-sky-400 border-b-4  w-[150px]'>Projects</h1><br/>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-10 '>
                <div className='relative'>
                    <img className='h-[250px]   ' src={websiteImg1} />
                    <div className='project-des'>
                        <p className='text-center py-5'>Basic Project</p>
                    </div>
                </div>
                <div className='relative'>
                    <img className='h-[250px]     ' src={websiteImg2} />
                    <div className='project-des'>
                        <p className='text-center py-5'>Basic Project</p>
                    </div>
                </div>
                <div className='relative'>
                    <img className='h-[250px]  ' src={websiteImg3} />
                    <div className='project-des'>
                        <p className='text-center py-5'>Basic Project</p>
                    </div>
                </div>
                <div className='relative'>
                    <img className='h-[250px]   ' src={websiteImg4} />
                    <div className='project-des'>
                        <p className='text-center py-5'>Basic Project</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
