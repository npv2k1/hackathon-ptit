import { Button, message } from 'antd'

import Layout from '@components/layouts/Layout'
import { Form, Space, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table/interface'
import moment from 'moment'
import { NextPage } from 'next'
import { useCallback, useContext, useEffect, useState } from 'react'
import { AppCtx } from 'src/contexts/AppContext'
interface DataType {
  key: string
  name: string
  age: number
  address: string
}

const Header = () => {
  const { methods, state } = useContext(AppCtx)
  return (
    <div className="w-full py-2 px-5 bg-gray-100">
      <Button
        onClick={() =>
          state?.account ? methods.changeAccount() : methods.connect()
        }
      >
        Connect
      </Button>
    </div>
  )
}

const CheckInTable = () => {
  const { methods, state, dispatch } = useContext(AppCtx)
  const [data, setData] = useState<DataType[]>([])
  const [loading, setLoading] = useState(true)
  console.log(
    '🚀 ~ file: index.tsx ~ line 39 ~ CheckInTable ~ loading',
    loading
  )

  const [location, setLocation] = useState<any>()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLocation(position.coords)
    })
  }, [])

  const Checkin = useCallback(async () => {
    if (!methods) return
    if (location) {
      console.log(
        'JSON.stringify(location)',
        JSON.stringify({
          latitude: location.latitude,
          longitude: location.longitude,
        })
      )
      await methods.checkin(
        JSON.stringify({
          latitude: location.latitude,
          longitude: location.longitude,
        })
      )
      setLoading(true)
      methods.setCheckinLoading(true)
    } else {
      message.error('Please allow location')
      navigator.geolocation.getCurrentPosition(function (position) {
        setLocation(position.coords)
      })
    }
  }, [location, methods])

  const columns: ColumnsType<DataType> = [
    {
      title: 'Timestamp',
      dataIndex: 'timestamp',
      key: 'timestamp',
      render: (text) => text,
      ellipsis: true,
    },
    {
      title: 'Latitude',
      dataIndex: 'latitude',
      key: 'latitude',
    },
    {
      title: 'Longitude',
      dataIndex: 'longitude',
      key: 'longitude',
    },
    {
      title: 'transactionHash',
      dataIndex: 'transactionHash',
      key: 'transactionHash',
      render: (text) => (
        <a
          className=""
          target="black"
          href={`https://testnet.aurorascan.dev/tx/${text}`}
        >
          {text}
        </a>
      ),
    },
  ]

  useEffect(() => {
    if (!loading || !methods) return
    if (!state.socket) return
    if (state.account === '') return
    state.socket.on('list-checkin', (_data) => {
      setData(_data)
    })
    state.socket.emit('list-checkin', {
      address: state.account,
    })
    state.socket.on('checkin:success', (data) => {
      // message.success(`Checkin success ${data}`)
      methods.setCheckinLoading(false)
    })
    return () => {
      if (!state.socket) return
      state.socket.off('list-checkin')
    }
  }, [state, loading, methods])

  return (
    <>
      <Space style={{ marginBottom: 16 }}>
        <Button onClick={Checkin}>Checkin</Button>
      </Space>
      <Table
        loading={state.checkinLoading}
        columns={columns}
        dataSource={data}
      />
    </>
  )
}
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
}

const formTailLayout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 8, offset: 4 },
}
const ProfileCard = () => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const { state, methods } = useContext(AppCtx)
  const [balance, setBalance] = useState(0)
  const [userInfo, setUserInfo] = useState<any>(null)

  useEffect(() => {
    const getUserInfo = async () => {
      const info = await methods.getUserInfo()
      console.log('🚀 ~ file: index.tsx ~ line 159 ~ getUserInfo ~ info', info)
      try {
        setUserInfo(JSON.parse(info))
        setLoading(false)
      } catch (e) {
        console.log('🚀 ~ file: index.tsx ~ line 162 ~ getUserInfo ~ e', e)
      }
    }
    getUserInfo()
  }, [methods, loading])

  const handleSubmitUserInfo = useCallback(
    async (value: any) => {
      const dateOfBirth = moment(form.getFieldValue('dateOfBirth')).format(
        'DD/MM/YYYY'
      )
      const uri = JSON.stringify({ ...form.getFieldsValue(), dateOfBirth })
      try {
        await methods.setUserInfo(uri)
        setLoading(true)
        // form.resetFields()
      } catch (e) {
        console.error(e)
        message.error('Update failed')
      }
    },
    [methods]
  )

  useEffect(() => {
    const getBalance = async () => {
      const balance = await methods.getCheckin(state.account)
      console.log('🚀 ~ file: index.tsx:201 ~ getBalance ~ balance', balance)
      setBalance(balance)
    }
    getBalance()
  }, [methods, state.account, state.checkinLoading])

  const formatAccount = (account: string) => {
    return account.slice(0, 6) + '...' + account.slice(-4)
  }

  const formatBalance = (balance: number) => {
    return balance + ' VCI'
  }

  return (
    <div className="flex flex-1 flex-col bg-white border border-gray-200 rounded-lg shadow-emerald-400 p-4">
      <div className="flex flex-col items-center pb-10 w-full">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={`https://avatars.dicebear.com/api/pixel-art/${state.account}.svg`}
          alt="Bonnie image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {formatAccount(state?.account || '')}
        </h5>
        <span className="text-lg text-gray-700 ">{userInfo?.fullName}</span>
        <div>
          <span className="text-sm text-gray-500 ">
            {formatBalance(balance)}
          </span>
        </div>
        <div className="flex mt-4 space-x-3 md:mt-6"></div>
      </div>
      <div></div>
    </div>
  )
}

const Home = () => {
  return (
    <div className="flex-1 flex flex-col max-w-screen-2xl mx-auto">
      <div className="flex flex-1 flex-row ">
        <div className="flex flex-[3]">
          <div className="p-4">
            <CheckInTable />
          </div>
        </div>
        <div className="flex flex-1">
          <div className="flex flex-1 p-4">
            <ProfileCard />
          </div>
        </div>
      </div>
    </div>
  )
}
Home.getLayout = (page: NextPage) => <Layout>{page}</Layout>

export default Home
