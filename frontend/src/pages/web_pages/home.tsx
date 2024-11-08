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
  FeaturesDesigns,
  AboutUsDesigns,
  TestimonialsDesigns,
  ContactFormDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import AboutUsSection from '../../components/WebPageComponents/AboutUsComponent';

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
      name: 'Department Integration',
      description:
        'Connect sales, customer service, and marketing departments effortlessly. Enhance collaboration and streamline communication across your law firm.',
      icon: 'mdiAccountGroup',
    },
    {
      name: 'Lead Tracking',
      description:
        'Monitor and manage leads efficiently. Track statuses, categories, and ownership to ensure no opportunity is missed.',
      icon: 'mdiTrackChanges',
    },
    {
      name: 'Data Insights',
      description:
        "Gain valuable insights with real-time data analytics. Make informed decisions to drive your firm's growth and success.",
      icon: 'mdiChartLine',
    },
  ];

  const testimonials = [
    {
      text: "${projectName} has transformed our firm's operations. The seamless integration between departments has boosted our efficiency tremendously.",
      company: 'Lexington Legal Solutions',
      user_name: 'John Doe, Managing Partner',
    },
    {
      text: 'Tracking leads has never been easier. ${projectName} provides us with real-time insights that are crucial for our decision-making.',
      company: 'Barrister \u0026 Co.',
      user_name: 'Jane Smith, Head of Sales',
    },
    {
      text: 'The user-friendly interface of ${projectName} makes it easy for our team to stay organized and focused on client needs.',
      company: 'Advocate Associates',
      user_name: 'Emily Johnson, Customer Service Lead',
    },
    {
      text: 'Thanks to ${projectName}, our marketing campaigns are more targeted and effective, leading to a significant increase in client engagement.',
      company: 'Legal Marketing Pros',
      user_name: 'Michael Brown, Marketing Director',
    },
    {
      text: 'The support from the ${projectName} team has been outstanding. They truly understand the needs of a law firm.',
      company: 'Justice Partners',
      user_name: 'Sarah Lee, Legal Advisor',
    },
    {
      text: 'Implementing ${projectName} was a game-changer for us. Our internal communication and client management have improved drastically.',
      company: 'Counsel Connect',
      user_name: 'David Wilson, Operations Manager',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`CRM Solutions for the Law Industry`}</title>
        <meta
          name='description'
          content={`Discover our CRM app designed for the law industry, connecting departments and streamlining lead tracking. Enhance your firm's efficiency with our comprehensive features.`}
        />
      </Head>
      <WebSiteHeader projectName={'Happy Bachha'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'Happy Bachha'}
          image={['Law firm CRM dashboard interface']}
          mainText={`Revolutionize Your Law Firm's CRM`}
          subTitle={`Connect departments seamlessly with ${projectName}. Streamline lead tracking and enhance efficiency in your law firm.`}
          design={HeroDesigns.IMAGE_RIGHT || ''}
          buttonText={`Get Started Now`}
        />

        <FeaturesSection
          projectName={'Happy Bachha'}
          image={['CRM features overview interface']}
          withBg={0}
          features={features_points}
          mainText={`Unlock Efficiency with ${projectName}`}
          subTitle={`Discover how ${projectName} transforms your law firm's operations with seamless integration and powerful tracking features.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <AboutUsSection
          projectName={'Happy Bachha'}
          image={['Team collaborating on CRM solution']}
          mainText={`Empowering Law Firms with ${projectName}`}
          subTitle={`${projectName} is dedicated to revolutionizing the legal industry by connecting departments and enhancing efficiency. Our CRM solution is tailored to meet the unique needs of law firms, ensuring seamless operations and growth.`}
          design={AboutUsDesigns.IMAGE_LEFT || ''}
          buttonText={`Learn More About Us`}
        />

        <TestimonialsSection
          projectName={'Happy Bachha'}
          design={TestimonialsDesigns.HORIZONTAL_CAROUSEL || ''}
          testimonials={testimonials}
          mainText={`What Our Clients Say About ${projectName} `}
        />

        <ContactFormSection
          projectName={'Happy Bachha'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Contact form with email icon']}
          mainText={`Get in Touch with ${projectName} `}
          subTitle={`Reach out to us anytime. Our team at ${projectName} is here to assist you with any inquiries or support you need. We respond promptly to ensure your experience is seamless.`}
        />
      </main>
      <WebSiteFooter projectName={'Happy Bachha'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
