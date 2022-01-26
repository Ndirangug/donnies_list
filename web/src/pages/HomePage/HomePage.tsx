import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import UserCell from 'src/components/UserCell/UserCell'
import RoomsCell from 'src/components/RoomsCell/RoomsCell'

const HomePage = () => {
  const [searchParams] = useSearchParams()
  const [userId] = useState(searchParams.get('user'))

  if (userId === null || userId === undefined) {
    return <div>Not logged in</div>
  }

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div className="flex flex-col">
        <div className="self-end">
          <UserCell id={parseInt(userId)} />
        </div>

        <div className="rooms-list flex flex-col justify-center items-center">
          <RoomsCell />
        </div>
      </div>
    </>
  )
}

export default HomePage
