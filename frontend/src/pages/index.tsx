import HomePage from "src/components/home";

const Home = () => {
  return (
    <HomePage />
  )
};

export default Home;

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  }
}