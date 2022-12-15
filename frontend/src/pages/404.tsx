import Layout from '@components/layouts/Layout'
import { NextPage } from 'next'

const Custom404 = () => {
  return (
    <div className="flex items-center justify-center flex-1">
      <div>
        <h1 className="text-center text-[10rem] font-bold text-[#fb7d49]">
          404
        </h1>
        <p className="text-center text-[4rem] font-semibold text-gray-700">
          Not Found
        </p>
      </div>
    </div>
  )
}
Custom404.getLayout = (page: NextPage) => <Layout>{page}</Layout>
export default Custom404
