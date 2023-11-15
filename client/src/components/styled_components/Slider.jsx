import { Carousel } from 'flowbite-react';

const Slider = ({projects}) => {


  return (
      <div className='h-3/4 w-full scroll-smooth'>
        <Carousel slideInterval={5000} pauseOnHover>              
            {projects.map((project, index) => {
                return (
                    <div className='w-full' key={index}>
                        <div className='flex flex-col gap-4'>
                            <h1 className="text uppercase">{project.title}</h1>
                            <div className='flex flex-col items-center gap-2 px-1'>
                            <a href={project.link} target="_blank" rel="noreferrer">
                                <img src={project.image} alt={project.title} className='w-3/4 lg:w-1/2 rounded cursor-pointer' />
                            </a>
                            <p className='w-3/4 lg:w-1/2'>{project.description}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </Carousel>
    </div>
  )
}

export default Slider