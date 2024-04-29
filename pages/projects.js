import {FiGithub} from 'react-icons/fi'
// import {HiOutlineExternalLink} from 'react-icons/hi'
import Image from 'next/image'
import Head from 'next/head'

const projects = () => {
    return (
        <div className='h-screen mx-5 sm:mx-auto pt-32'>
            <Head>
                <title>Projects | Phyo Min Khant</title>
            </Head>
            <h1 className='font-bold text-3xl text-center'></h1>
            <div className='max-w-5xl md:px-4 py-8 pb-32 mx-auto space-y-28'>

                <section className='p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl'>
                    <h1 className='font-bold text-lg md:text-xl text-blue-500 pb-4'>Hospital Management System</h1>
                    <div className='grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center'>
                        <div className='aspect-w-5 aspect-h-3'>
                            <Image src='/images/project-images/hospital.png' layout='fill' objectFit='contain' alt=''/>
                        </div>
                        <blockquote className='sm:col-span-2'>
                            <p className='text-xs md:text-base'>
                            The Hospital Management System (HMS) is a comprehensive software solution designed to streamline and automate various administrative and operational tasks within a healthcare facility. This system aims to enhance the efficiency, accuracy, and overall quality of patient care by integrating multiple modules catering to different departments and functionalities. 
                            </p>
                            <cite className='inline-flex items-center mt-8 not-italic'>
                                <span className='hidden w-6 h-px bg-gray-400 sm:inline-block'></span>
                                <p className='text-xs md:text-base text-gray-500 sm:ml-3'>
                                    Dot Net Core MVC, JQuery, Ajax, HTML, React, CSS
                                </p>
                            </cite>
                            <div className='flex pt-8 space-x-4'>
                                {/* <div>
                                    <a href='https://github.com/prasad-chavan1/Animesthetic-Social-Media' target='_blank' rel='noopner noreferrer'>
                                        <FiGithub size='30px'/>
                                    </a>
                                </div> */}
                                {/* <div> */}
                                {/*     <HiOutlineExternalLink size='30px'/> */}
                                {/* </div> */}
                            </div>
                        </blockquote>
                    </div>
                </section>

                <section className='p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl'>
                    <h1 className='font-bold text-lg md:text-xl text-blue-500 pb-4'>Dedynamic Merchandising</h1>
                    <div className='grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center'>
                        <div className='aspect-w-4 aspect-h-3'>
                            <Image src='/images/project-images/dedynamic.png' layout='fill' objectFit='contain' alt=''/>
                        </div>
                        <blockquote className='sm:col-span-2'>
                            <p className='text-xs md:text-base'>
                            Dedynamic is a comprehensive business management solution designed to streamline operations and enhance efficiency across various sectors. This project integrates modules for Merchandising, Media Creation, Sale Order, Purchase Order, and Dealer Management System (DMS) into a cohesive platform, providing businesses with a unified toolset to manage their processes seamlessly..                             </p>
                            <cite className='inline-flex items-center mt-8 not-italic'>
                                <span className='hidden w-6 h-px bg-gray-400 sm:inline-block'></span>
                                <p className='text-xs md:text-base text-gray-500 sm:ml-3'>
                                    Nestjs, Reactjs, HTML, CSS
                                </p>
                            </cite>
                            <div className='flex pt-8 space-x-4'>
                                {/* <div>
                                    <a href='https://github.com/prasad-chavan1/word-scramble-extension' target='_blank' rel='noopner noreferrer'>
                                        <FiGithub size='30px'/>
                                    </a>
                                </div> */}
                                {/* <div> */}
                                {/*     <HiOutlineExternalLink size='30px'/> */}
                                {/* </div> */}
                            </div>
                        </blockquote>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default projects
