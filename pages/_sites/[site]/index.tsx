import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Index({ locale, site }) {
  return (
    <div>
      Site:{site} Next App with Locale: {locale}
    </div>
  );
}

const mockDB = [
  {
    name: 'Site 1',
    description: 'Subdomain + custom domain',
    subdomain: 'subdomain-1',
    customDomain: 'custom-domain-1.com',
  },
  {
    name: 'Site 2',
    description: 'Subdomain only',
    subdomain: 'subdomain-2',
    customDomain: null,
  },
  {
    name: 'Site 3',
    description: 'Subdomain only',
    subdomain: 'subdomain-3',
    customDomain: null,
  },
];

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true, // fallback true allows sites to be generated using ISR
  };
}

export async function getStaticProps({ params: { site }, locale }) {
  return {
    props: { locale, site },
    revalidate: 3600, // set revalidate interval of 1h
  };
}
