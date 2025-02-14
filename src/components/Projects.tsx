
import React from 'react'
import Heading from './Heading'
import Card from './Card'


const data =[
    {
        id:0,
        title:"Resume-builder",
        desc:"An HTML and typescript based app",
        img: "/images/project1-pic.jpeg",
        tags:["Html" ,"Typescript"],
        
    },
    {
        id:1,
        title:"Static Resume",
        desc:"powerpoint based",
        img:"/images/project2-pic.jpeg",
        tags:["powerpoint tool"],
    },
    {
        id:2,
        title:"Presentation",
        desc:"An HTML and typescript based",
        img:"/images/project3-pic.jpeg",
        tags:["Html","Typescript"],
    },
];



const Projects = () => {
  return (
    <div id="projects" className='container pt-32'>
      <Heading title="My projects" />
      <div className='grid gap-10 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
};

export default Projects;
