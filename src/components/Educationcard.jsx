import React from 'react'

const EducationCard = ({course, description, image, school}) => {
  return (
    <div className='bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 transition-300 cursor-pointer'>
        <img src={image} alt={course} className='w-full h-60 object-cover'/>
        <div className='p-6'>
            <h3 className='text-xl font-semibold mb-2'>{course}</h3>
            <p className='text-gray-400 mb-4'>{description}</p>
            <div className='flex flex-wrap gap-4 mb-4 '>
                {school.map((item, index)=>(
                    <span key={index} className='px-3 py-1 bg-dark-400 rounded-full'>
                        {item}
                    </span>
                ))}
            </div>
        </div>
    </div>
  )
}

export default EducationCard