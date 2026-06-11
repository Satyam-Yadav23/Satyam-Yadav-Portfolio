import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Education from '../components/Educations'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Education />
            <Skills />
            <Projects/>
            <Contact/>
        </div>
    )
}
export default Home