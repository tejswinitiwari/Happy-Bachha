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
  TestimonialsDesigns,
  FeaturesDesigns,
  PricingDesigns,
  ContactFormDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import TestimonialsSection from '../../components/WebPageComponents/TestimonialsComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import PricingSection from '../../components/WebPageComponents/PricingComponent';

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

  const testimonials = [
    {
      text: '${projectName} has revolutionized our workflow. The integration and lead management features have significantly boosted our productivity.',
      company: 'Legal Pioneers LLC',
      user_name: 'Anna Roberts, Senior Partner',
    },
    {
      text: 'The insights provided by ${projectName} are invaluable. We can now make data-driven decisions that propel our firm forward.',
      company: 'Justice Innovators',
      user_name: 'Mark Spencer, Operations Director',
    },
    {
      text: 'Our team loves the user-friendly interface of ${projectName}. It has made managing client relationships so much easier.',
      company: 'Advocate Solutions',
      user_name: 'Rachel Green, Client Relations Manager',
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

  const features_points = [
    {
      name: 'Integrated Workflow',
      description:
        'Seamlessly connect all departments within your law firm. Enhance collaboration and streamline workflows with our integrated CRM solution.',
      icon: 'mdiLink',
    },
    {
      name: 'Lead Management',
      description:
        'Efficiently track and manage leads. Our system provides real-time updates and insights to help you convert leads into clients effectively.',
      icon: 'mdiAccountMultiple',
    },
    {
      name: 'Analytics and Insights',
      description:
        "Leverage powerful analytics to make informed decisions. Our CRM offers comprehensive data insights to drive your firm's growth and success.",
      icon: 'mdiChartPie',
    },
    {
      name: 'Client Communication',
      description:
        'Enhance client relationships with streamlined communication tools. Keep track of interactions and ensure timely follow-ups.',
      icon: 'mdiMessageText',
    },
    {
      name: 'Customizable Dashboards',
      description:
        'Tailor your CRM experience with customizable dashboards. Access the information you need quickly and efficiently.',
      icon: 'mdiViewDashboard',
    },
    {
      name: 'Secure Data Management',
      description:
        "Protect your firm's data with robust security features. Ensure compliance and safeguard sensitive information.",
      icon: 'mdiLock',
    },
  ];

  const pricing_features = {
    standard: {
      features: [
        'Basic Lead Management',
        'Client Communication Tools',
        'Customizable Dashboards',
      ],
      limited_features: ['Limited Data Insights', 'Basic Integration Options'],
    },
    premium: {
      features: [
        'Advanced Lead Management',
        'Enhanced Client Communication',
        'Comprehensive Dashboards',
      ],
      also_included: [
        'Full Data Insights',
        'Priority Support',
        'Advanced Integration Options',
      ],
    },
    business: {
      features: [
        'Complete Lead Management Suite',
        'Full Client Communication Suite',
        'Enterprise Dashboards',
        'Unlimited Data Insights',
        'Dedicated Account Manager',
      ],
    },
  };

  const description = {
    standard:
      'The Standard plan is ideal for individual practitioners or small firms looking to manage leads and client communications effectively.',
    premium:
      'The Premium plan is perfect for small to medium-sized businesses seeking advanced features and enhanced support to boost their operations.',
    business:
      'The Business plan is designed for large enterprises requiring comprehensive CRM solutions with full customization and dedicated support.',
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Our Services - ${projectName}`}</title>
        <meta
          name='description'
          content={`Explore the comprehensive services offered by ${projectName}, designed to enhance your law firm's efficiency and client management.`}
        />
      </Head>
      <WebSiteHeader projectName={'Happy Bachha'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'Happy Bachha'}
          image={['Law firm services overview']}
          mainText={`Transform Your Firm with ${projectName} Services`}
          subTitle={`Discover the range of services offered by ${projectName} to enhance your law firm's operations and client management. Our solutions are tailored to meet your unique needs.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`Explore Our Services`}
        />

        <TestimonialsSection
          projectName={'Happy Bachha'}
          design={TestimonialsDesigns.HORIZONTAL_CAROUSEL || ''}
          testimonials={testimonials}
          mainText={`Client Experiences with ${projectName} `}
        />

        <FeaturesSection
          projectName={'Happy Bachha'}
          image={['Features with icons display']}
          withBg={0}
          features={features_points}
          mainText={`Comprehensive Features of ${projectName}`}
          subTitle={`Explore the powerful features of ${projectName} designed to streamline your law firm's operations and enhance client management.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <PricingSection
          projectName={'Happy Bachha'}
          withBg={1}
          features={pricing_features}
          description={description}
        />

        <ContactFormSection
          projectName={'Happy Bachha'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Contact form with email icon']}
          mainText={`Reach Out to ${projectName} `}
          subTitle={`We're here to help. Contact ${projectName} for any inquiries or support. Our team is ready to assist you promptly.`}
        />
      </main>
      <WebSiteFooter projectName={'Happy Bachha'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
