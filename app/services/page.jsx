"use client"

import {BsArrowDownRight} from 'react-icons/bs';
import Link from 'next/link';
import {easeIn, motion} from "framer-motion";

const services = [{
    num: '01',
    title: 'Junior Developer',
    company: 'Transitus - NexGen Innovative Solutions',
    location: 'Bengaluru, India',
    period: 'Aug 2025 – Present',
    description: 'Engineered fault-tolerant execution pipelines reducing runtime failures by 80%. Build core backend services for Universal Oracle Application Connector, handling 10+ enterprise automation workflows. Delivered automated reporting microservices eliminating 12 hrs/week of manual monitoring.',
    href: ''
}, {
    num: '02',
    title: 'Software Engineer',
    company: 'Maa Gyan Services',
    location: 'Giridih, India',
    period: 'June 2024 – May 2025',
    description: 'Built responsive web applications in React.js, reducing page load time from 3.5s to 1.5s. Designed 15+ RESTful API endpoints in Node.js & Express.js. Optimized MongoDB schemas reducing query latency by 40%. Delivered 20+ features in 5-member Agile team with zero critical defects.',
    href: ''
}, ]

const Services = () => {
    return (<section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <div className="container mx-auto">
            <motion.div initial={{opacity: 0}}
                        animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: easeIn},}}
                        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
                {services.map((service, index) => {
                    return (<div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                        {/*top*/}
                        <div className="w-full flex justify-between items-center">
                            <div
                                className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                            <Link href={service.href}
                                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                <BsArrowDownRight className="text-primary text-3xl "/>
                            </Link>
                        </div>
                        {/*title*/}
                        <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                        {/*company*/}
                        <p className="text-white/80 font-semibold">{service.company}</p>
                        {/*location & period*/}
                        <p className="text-white/60 text-sm">{service.location} | {service.period}</p>
                        {/*description*/}
                        <p className="text-white/60">{service.description}</p>
                        {/*border*/}
                        <div className="border-b border-white/20 w-full"></div>
                    </div>)
                })}
            </motion.div>
        </div>
    </section>)
}
export default Services
