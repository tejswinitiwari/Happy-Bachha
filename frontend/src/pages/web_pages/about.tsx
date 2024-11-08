import React, { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAppSelector } from '../../stores/hooks';
import LayoutGuest from '../../layouts/Guest';
import WebSiteHeader from '../../components/WebPageComponents/Header';
import WebSiteFooter from '../../components/WebPageComponents/Footer';
import {
  HeroDesigns,
  AboutUsDesigns,
  FeaturesDesigns,
  TestimonialsDesigns,
  ContactFormDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import AboutUsSection from '../../components/WebPageComponents/AboutUsComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import TestimonialsSection from '../../components/WebPageComponents/TestimonialsComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

export default function WebSite() {
  const cardsStyle = useAppSelector((state) => state.style.cardsStyle);
  const bgColor = useAppSelector((state) => state.style.bgLayoutColor);
  const projectName = 'Happy Bachha';

  useEffect(() => {
    const darkElement = document.querySelector('body .dark');
    if (darkElement) {
      darkElement.classList.remove('dark');
    }
  }, []);
  const pages = [
    {
      href: '/home',
      label: 'home',
    },

    {
      href: '/about',
      label: 'about',
    },

    {
      href: '/services',
      label: 'services',
    },

    {
      href: '/contact',
      label: 'contact',
    },

    {
      href: '/faq',
      label: 'FAQ',
    },
  ];

  const features_points = [
    {
      name: 'Seamless Integration',
      description:
        'Effortlessly connect all departments within your law firm. Enhance collaboration and streamline workflows with our integrated CRM solution.',
      icon: 'mdiLinkVariant',
    },
    {
      name: 'Advanced Lead Management',
      description:
        'Track and manage leads with precision. Our system provides real-time updates and insights to help you convert leads into clients effectively.',
      icon: 'mdiAccountSearch',
    },
    {
      name: 'Data-Driven Insights',
      description:
        "Leverage powerful analytics to make informed decisions. Our CRM offers comprehensive data insights to drive your firm's growth and success.",
      icon: 'mdiChartBar',
    },
  ];

  const testimonials = [
    {
      text: '${projectName} has been a game-changer for our firm. The integration and lead management features have significantly improved our efficiency.',
      company: 'Legal Innovators Inc.',
      user_name: 'Alice Thompson, Senior Partner',
    },
    {
      text: 'The insights provided by ${projectName} are invaluable. We can now make data-driven decisions that propel our firm forward.',
      company: 'Justice League LLP',
      user_name: 'Robert King, Director of Operations',
    },
    {
      text: 'Our team loves the user-friendly interface of ${projectName}. It has made managing client relationships so much easier.',
      company: 'Advocate Solutions',
      user_name: 'Jessica Lee, Client Relations Manager',
    },
    {
      text: "Thanks to ${projectName}, our marketing efforts are more targeted and effective. We've seen a noticeable increase in client engagement.",
      company: 'Barrister Marketing Group',
      user_name: 'Tom Harris, Marketing Lead',
    },
    {
      text: 'The support from the ${projectName} team is exceptional. They truly understand the needs of a law firm and are always ready to help.',
      company: 'Counsel Connect',
      user_name: 'Emily Davis, Legal Advisor',
    },
    {
      text: "Implementing ${projectName} was one of the best decisions we've made. Our internal communication and client management have improved drastically.",
      company: 'Lexington Legal Partners',
      user_name: 'Michael Brown, Managing Director',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`About Us - ${projectName}`}</title>
        <meta
          name='description'
          content={`Learn more about ${projectName}, our mission, values, and how we empower law firms with innovative CRM solutions.`}
        />
      </Head>
      <WebSiteHeader projectName={'Happy Bachha'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'Happy Bachha'}
          image={['Team brainstorming session image']}
          mainText={`Discover the Vision Behind ${projectName}`}
          subTitle={`At ${projectName}, we are committed to transforming the legal industry with our innovative CRM solutions. Learn about our journey, mission, and the values that drive us.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`Explore Our Story`}
        />

        <AboutUsSection
          projectName={'Happy Bachha'}
          image={['Team discussing company values']}
          mainText={`Our Mission and Values at ${projectName}`}
          subTitle={`Driven by innovation, ${projectName} is dedicated to empowering law firms with cutting-edge CRM solutions. Discover our commitment to excellence and client success.`}
          design={AboutUsDesigns.IMAGE_LEFT || ''}
          buttonText={`Learn More About Us`}
        />

        <FeaturesSection
          projectName={'Happy Bachha'}
          image={['Features overview with icons']}
          withBg={1}
          features={features_points}
          mainText={`Innovative Features of ${projectName}`}
          subTitle={`Explore the powerful features of ${projectName} that streamline operations and enhance productivity for law firms.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <TestimonialsSection
          projectName={'Happy Bachha'}
          design={TestimonialsDesigns.MULTI_CARD_DISPLAY || ''}
          testimonials={testimonials}
          mainText={`Client Success Stories with ${projectName} `}
        />

        <ContactFormSection
          projectName={'Happy Bachha'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Contact form with email icon']}
          mainText={`Connect with ${projectName} Today `}
          subTitle={`We're here to assist you. Reach out to ${projectName} for any inquiries or support. Our team responds promptly to ensure your needs are met.`}
        />
      </main>
      <WebSiteFooter projectName={'Happy Bachha'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
