/*
 * Copyright 2025 Praveen Kumar
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { PortfolioConfig } from '@/app/types/config';
import { socials } from '@/app/config/socials';
import { projects } from '@/app/config/projects';
import { skills } from '@/app/config/skills';

/**
 * My portfolio configuration
 */
export const portfolioConfig: PortfolioConfig = {
  siteMetadata: {
    title: 'Christen Kael',
    description: 'Portfolio website by Christen',
    author: 'Christen Kael',
  },

  navigation: {
    logo: {
      text: 'CK',
    },
    links: [
      { href: 'home', label: 'Home' },
      { href: 'about', label: 'About' },
      { href: 'projects', label: 'Projects' },
      { href: 'skills', label: 'Skills' },
      { href: 'connect', label: 'Connect' },
    ],
  },

  sections: {
    home: {
      greeting: "Hi, I'm",
      name: 'Christen Kael',
      typingTexts: [
        'Building intuitive web apps',
        'exploring new technologies',
        'Creating user-focused apps',
      ],
      description:
        'I am a dedicated Software Engineer specializing in full-stack application development. I enjoy crafting responsive web solutions using modern technologies like Next.js, React, Tailwind CSS, Node.js, Express, and MongoDB, while also applying DevOps practices, continuously aiming to deliver high-quality, comprehensive, user-centric software solutions.',
      scrollIndicatorText: 'Scroll to explore',
    },

    about: {
      title: 'About',
      subtitle: 'Me',
      bio: [
        "Hi, I'm Christen, a Senior Full-Stack Software Engineer who loves turning ideas into fast, scalable, and user-focused digital products.For the past several years, I’ve been building applications end-to-end — from clean, intuitive front-end interfaces to stable, high-performance back-end systems.",
        'I specialize in modern JavaScript technologies like React, Next.js, TypeScript, Node.js, Express, and Tailwind, and I’m experienced in designing APIs, architecting databases, and delivering full solutions that work at scale.',
        'What excites me most about software engineering is solving real problems: Improving performance, creating smooth UX, automating business workflows, integrating complex APIs, and building products that grow with the business.',
        "I focus on writing clean, maintainable code, communicating clearly, and delivering reliable results. Whether it's building a new feature, optimizing an existing system, or architecting a full product from scratch, I bring both technical depth and a strong sense of ownership to every project.",
        'If you’re looking for someone who can handle the front end, the back end, the logic, the architecture, and the delivery, I’m ready to build it with you.',
      ],
      details: [
        { label: 'Level', value: 'Senior Software Engineer' },
        { label: 'Experience', value: '6+ Years Experience' },
      ],
      qualities: [
        {
          icon: 'Zap',
          title: 'Fast & Efficient Development',
          description: 'Delivering high-performance solutions with clean, optimized code',
          gradient: 'from-emerald-500 to-blue-500',
        },
        {
          icon: 'Rocket',
          title: 'Problem Solver',
          description:
            'I approach complex challenges with analytical thinking and break them down into manageable solutions.',
          gradient: 'from-emerald-500 to-blue-500',
        },
        {
          icon: 'Code',
          title: 'Clean Code Advocate',
          description:
            'I value maintainable, well-structured code that follows best practices and industry standards.',
          gradient: 'from-blue-500 to-violet-500',
        },
        {
          icon: 'Lightbulb',
          title: 'Innovative Thinker',
          description:
            'I constantly explore new technologies and approaches to solve problems more efficiently.',
          gradient: 'from-purple-500 to-indigo-500',
        },
        {
          icon: 'BarChart3',
          title: 'User-Focused',
          description:
            'I prioritize creating intuitive, accessible experiences that meet real user needs.',
          gradient: 'from-indigo-500 to-cyan-500',
        },
        {
          icon: 'BookOpen',
          title: 'Continuous Learning & Growth',
          description: 'Always exploring new technologies and improving skills',
          gradient: 'from-indigo-500 to-cyan-500',
        },
      ],
    },

    projects: {
      title: 'My',
      subtitle: 'Projects',
      description:
        "Here's a selection of projects that showcase my skills and passion for building exceptional digital experiences across different platforms.",
      projects: projects,
      viewMoreButton: {
        label: 'View More Projects',
        url: 'https://github.com/ThomasKingsley',
      },
    },

    skills: {
      title: 'Technical',
      subtitle: 'Skills',
      description:
        "I've gained proficiency in various technologies throughout my career. Here are the key tools and frameworks I use to build exceptional products.",
      categories: skills,
    },

    connect: {
      title: 'Connect',
      subtitle: 'With Me',
      description:
        'Feel free to connect with me on these platforms to discuss tech, share ideas, or just say hello!',
      socials: socials,
    },
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Christen Kael. All rights reserved.`,
    tagline: 'Designed and built with ❤️',
  },
};

export default portfolioConfig;
