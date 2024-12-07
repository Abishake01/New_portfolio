import websiteImg1 from '../assets/jena.jpg'
export default function Projects() {
    return <section className="flex px-5 py-20 justify-center bg_sec">
        <div className="w-1/2">
        <div className="flex justify-center">
             <h1 className=' text-4xl font-bold border-sky-400 border-b-4  w-[150px]'>Projects</h1><br/>
        </div>
        </div>
        <div className="w-1/2">
            <img src={websiteImg1} />
        </div>
    </section>
}
