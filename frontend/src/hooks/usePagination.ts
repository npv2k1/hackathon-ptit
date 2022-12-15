import { useRouter } from 'next/router'
import React, { useEffect, useMemo, useState } from 'react'
import {
  Order_By,
  Post,
  Post_Bool_Exp,
  Post_Constraint,
  Post_Order_By,
  usePostQuery,
  usePostWithBookmarkQuery,
} from 'src/types'



const usePagination = (limit = 21) => {
  const [result, setResult] = React.useState<Post[]>([])
  const [from, setFrom] = React.useState(1)

  const { pathname, query } = useRouter()

  const [orderBy, setOrderBy] = useState<Post_Order_By>({
    createdAt: Order_By.Desc,
  })
  const [queyCondiction, setQueyCondiction] = useState<Post_Bool_Exp>({})

  useEffect(() => {
    switch (pathname) {
      case '/upvoted':
        setOrderBy({
          Votes_aggregate: {
            count: Order_By.Desc,
          },
        })
        break
      case '/bookmarks':
        setQueyCondiction({
          Bookmarks: {
            userId: {
              _is_null: false,
            },
          },
          
        })
        break;
      case '/sources/[name]':
        setQueyCondiction({
          Source: {
            Publisher: {
              name: {
                _eq: `${query.name}`,
              },
            },
          },
        })
        break
      case '/tech':
        setQueyCondiction({
          Source: {
            Category: {
              name: {
                _eq: 'tech',
              },
            },
          },
        })
        break
      case '/finance':
        setQueyCondiction({
          Source: {
            Category: {
              name: {
                _eq: 'finance',
              },
            },
          },
        })
        break      
       
    }
    if (query.search != undefined){
      setQueyCondiction((prev) => ({
        ...prev,
        title: {
          _ilike: `%${query?.search ? query.search : ''}%`,
        },
      }))
    }
  }, [pathname, query])

  const context = useMemo(() => ({ additionalTypenames: ['Posts'] }), [])

  const [{ fetching, data, error }] = usePostWithBookmarkQuery({
    variables: {
      limit: from * limit || limit,
      offset: 0,
      orderBy: orderBy,
      where: {
        ...queyCondiction,
      },
    },
    context,
    requestPolicy: 'cache-and-network',
  })

 
  useEffect(() => {
    if (fetching) return
    setResult(data?.Post as Post[])
  }, [data, fetching])


  const fetchMore = React.useCallback(async () => {
    if (!fetching) {
      setFrom((s) => s + 1)
    }
  }, [limit, fetching])

 
  return [{ data: result, error }, fetchMore, true] as const
}

export default usePagination
