import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='work'
      className={`w-full px-[10%] py-12 scroll-mt-20 ${isDarkMode ? 'bg-[#121212]' : ''}`}
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className='text-center mb-2 text-lg font-Ovo'
      >
        My Portfolio
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className='text-center text-5xl font-Ovo'
      >
        Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
      >
        Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in different technologies.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10 dark:text-black'
      >
        {workData.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            className={`relative rounded-xl overflow-hidden shadow-xl cursor-pointer group p-4 ${isDarkMode ? 'bg-[#202020]' : 'bg-gradient-to-br from-gray-100 to-white'}`}
          >
            {/* Project Image */}
            <div className='relative w-full h-64 bg-cover bg-center rounded-lg overflow-hidden' style={{ backgroundImage: `url(${project.bgImage})` }}>
              <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex justify-center items-center gap-4 transition-opacity duration-300'>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">

                  <Image src={assets.github_icon} alt='GitHub' className='w-10 h-10 bg-white p-2 rounded-full shadow-lg hover:scale-110 transition' />
                </a>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <Image src={assets.live_icon} alt='Live Demo' className='w-10 h-10 bg-white p-2 rounded-full shadow-lg hover:scale-110 transition' />
                </a>
              </div>
            </div>

            {/* Project Details */}
            <div className='p-5 text-center mt-4 rounded-lg shadow-lg'>
              <h2 className='font-semibold text-xl dark:text-white'>{project.title}</h2>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        href='https://github.com/striverz'
        target='_blank'
        className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover shadow-lg'
      >
        Show More
        <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' className='w-4' />
      </motion.a>
    </motion.div>
  );
};

export default Work;