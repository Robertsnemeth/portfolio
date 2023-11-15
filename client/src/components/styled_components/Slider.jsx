import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Slider = ({projects}) => {

    const handleSlideLeft = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 3000;
    };

    const handleSlideRight = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 3000;
    };

  return (
      <div id={'slider'} className=' h-full w-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative group'>
        <MdChevronLeft onClick={handleSlideLeft} className="border border-gray-500 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden sm:group-hover:block left-5 top-[50%]" size={40} color="gray"/>              
            {projects.map((project, index) => {
                return (
                    <div className='inline-block w-[500px] text-center' key={index}>
                        <div className='flex flex-col gap-4'>
                            <h1 className="text uppercase">{project.title}</h1>
                            <div className='flex flex-col gap-2 px-1'>
                            <a href={project.link} target="_blank" rel="noreferrer">
                                <img src={project.image} alt={project.title} className='w-3/4 lg:w-1/2 rounded cursor-pointer' />
                            </a>
                            <p>{project.description}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        <MdChevronRight onClick={handleSlideRight} className=" border border-gray-500 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden sm:group-hover:block right-5 top-[50%]" size={40} color="gray"/>
    </div>
  )
}

export default Slider