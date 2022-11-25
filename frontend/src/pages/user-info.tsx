import UserInfoClient from "@/components/user-info";

const UserInfoPage = () => {
  return (
    <UserInfoClient />
  )
}

export default UserInfoPage;

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  }
}