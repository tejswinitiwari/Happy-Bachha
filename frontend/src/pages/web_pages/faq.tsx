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
  FaqDesigns,
  ContactFormDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import FaqSection from '../../components/WebPageComponents/FaqComponent';

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

  const faqs = [
    {
      question: 'What is ${projectName} and how does it work?',
      answer:
        '${projectName} is a CRM solution designed for law firms to streamline operations and enhance client management. It integrates various departments and provides tools for lead tracking, client communication, and data insights.',
    },
    {
      question: "How can ${projectName} improve my law firm's efficiency?",
      answer:
        '${projectName} improves efficiency by automating routine tasks, providing real-time data insights, and facilitating seamless communication between departments, allowing your team to focus on client service.',
    },
    {
      question: 'Is there a trial period available for ${projectName}?',
      answer:
        'Yes, ${projectName} offers a trial period for new users to explore its features and see how it can benefit their law firm. Contact us for more details on how to start your trial.',
    },
    {
      question: "Can I customize ${projectName} to fit my firm's needs?",
      answer:
        'Absolutely! ${projectName} offers customizable dashboards and features that can be tailored to meet the specific needs of your law firm, ensuring you get the most out of the platform.',
    },
    {
      question: 'What kind of support does ${projectName} offer?',
      answer:
        '${projectName} provides comprehensive support, including email support, live chat, and a dedicated account manager for premium and business plans to ensure you have the help you need.',
    },
    {
      question: 'How secure is my data with ${projectName}?',
      answer:
        '${projectName} prioritizes data security with robust encryption, regular security audits, and compliance with industry standards to protect your sensitive information.',
    },
    {
      question: 'What are the pricing options for ${projectName}?',
      answer:
        '${projectName} offers various pricing plans, including Standard, Premium, and Business options, each designed to cater to different firm sizes and needs. Visit our pricing page for more information.',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Frequently Asked Questions - ${projectName}`}</title>
        <meta
          name='description'
          content={`Find answers to common questions about ${projectName}. Learn more about our features, pricing, and support options.`}
        />
      </Head>
      <WebSiteHeader projectName={'Happy Bachha'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'Happy Bachha'}
          image={['FAQ section illustration']}
          mainText={`Your Questions Answered with ${projectName}`}
          subTitle={`Explore our comprehensive FAQ section to find answers to your questions about ${projectName}. Learn more about our features, pricing, and support.`}
          design={HeroDesigns.TEXT_CENTER || ''}
          buttonText={`Browse FAQs`}
        />

        <FaqSection
          projectName={'Happy Bachha'}
          design={FaqDesigns.TWO_COLUMN || ''}
          faqs={faqs}
          mainText={`Common Questions About ${projectName} `}
        />

        <ContactFormSection
          projectName={'Happy Bachha'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Contact form with email icon']}
          mainText={`Get in Touch with ${projectName} `}
          subTitle={`Have more questions? Contact ${projectName} for further assistance. Our team is ready to help you with any inquiries or support needs.`}
        />
      </main>
      <WebSiteFooter projectName={'Happy Bachha'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
