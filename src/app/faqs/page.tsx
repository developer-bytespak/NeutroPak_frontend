import { NextPage } from 'next';
import Head from 'next/head';

const FAQs: NextPage = () => {
  const faqs = [
    {
      question: 'What is your return policy?',
      answer: 'We offer 30-day returns on most items. Items must be in original condition with all packaging.',
    },
    {
      question: 'How long does shipping take?',
      answer: 'We offer free shipping on orders over $50. Standard shipping takes 5-7 business days.',
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship to most countries worldwide. International shipping rates apply.',
    },
    {
      question: 'How do I track my order?',
      answer: 'You can track your order using the tracking link sent to your email after shipment.',
    },
    {
      question: 'Is my payment information secure?',
      answer: 'Yes, we use industry-standard SSL encryption to protect your payment information.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and digital wallets like Apple Pay and Google Pay.',
    },
  ];

  return (
    <>
      <Head>
        <title>FAQs - NeutroPak</title>
        <meta name="description" content="Frequently asked questions about NeutroPak" />
      </Head>

      <main className="faqs-page">
        <div className="faqs-container">
          <h1>Frequently Asked Questions</h1>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={index} className="faq-item">
                <summary className="faq-question">{faq.question}</summary>
                <p className="faq-answer">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default FAQs;
