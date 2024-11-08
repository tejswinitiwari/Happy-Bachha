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
  ContactFormDesigns,
  FaqDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

import FaqSection from '../../components/WebPageComponents/FaqComponent';

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

  const faqs = [
    {
      question: 'What features does ${projectName} offer?',
      answer:
        "${projectName} offers features like lead management, client communication tools, customizable dashboards, and data-driven insights to enhance your law firm's operations.",
    },
    {
      question: 'How does ${projectName} integrate with existing systems?',
      answer:
        '${projectName} seamlessly integrates with your existing systems through API connections, ensuring smooth data flow and minimal disruption to your current processes.',
    },
    {
      question: 'Is my data secure with ${projectName}?',
      answer:
        'Yes, ${projectName} employs robust security measures, including encryption and regular audits, to ensure your data is protected and compliant with industry standards.',
    },
    {
      question: 'Can I customize the dashboards in ${projectName}?',
      answer:
        'Absolutely! ${projectName} allows you to customize dashboards to fit your specific needs, providing quick access to the most relevant information for your firm.',
    },
    {
      question: 'What support options are available with ${projectName}?',
      answer:
        '${projectName} offers various support options, including email support, live chat, and a dedicated account manager for premium and business plans.',
    },
    {
      question: 'How does ${projectName} help with lead management?',
      answer:
        '${projectName} provides advanced lead tracking and management tools, allowing you to monitor lead status, categorize them, and assign ownership for efficient follow-up.',
    },
    {
      question: 'What pricing plans are available for ${projectName}?',
      answer:
        '${projectName} offers Standard, Premium, and Business plans, each tailored to different needs and sizes of law firms. Visit our pricing page for more details.',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Contact Us - ${projectName}`}</title>
        <meta
          name='description'
          content={`Get in touch with ${projectName} for any inquiries or support. Our team is here to assist you with all your needs.`}
        />
      </Head>
      <WebSiteHeader projectName={'Happy Bachha'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'Happy Bachha'}
          image={['Customer support team image']}
          mainText={`Connect with ${projectName} Today`}
          subTitle={`We're here to assist you with any questions or support you need. Reach out to ${projectName} and let us help you achieve your goals.`}
          design={HeroDesigns.IMAGE_RIGHT || ''}
          buttonText={`Contact Us Now`}
        />

        <FaqSection
          projectName={'Happy Bachha'}
          design={FaqDesigns.ACCORDION || ''}
          faqs={faqs}
          mainText={`Frequently Asked Questions about ${projectName} `}
        />

        <ContactFormSection
          projectName={'Happy Bachha'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Email communication illustration']}
          mainText={`Reach Out to ${projectName} `}
          subTitle={`We're available to assist you with any inquiries or support. Contact ${projectName} and expect a prompt response from our team.`}
        />
      </main>
      <WebSiteFooter projectName={'Happy Bachha'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
