export default function Index({ locale, site }) {
  return (
    <div>
      Site:{site} Next App with Locale: {locale}
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params: { site }, locale }) {
  return {
    props: { locale, site },
    revalidate: 3600, // set revalidate interval of 1h
  };
}
