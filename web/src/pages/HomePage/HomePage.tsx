import { MetaTags } from '@redwoodjs/web'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import UserCell from 'src/components/UserCell/UserCell'
import RoomsCell from 'src/components/RoomsCell/RoomsCell'
import HomeBottomSheet from 'src/components/HomeBottomSheet/HomeBottomSheet'
import { Button } from '@mui/material'
import { bottomSheet } from 'react-simple-bottom-sheet'

const HomePage = () => {
  const [searchParams] = useSearchParams()
  const [userId] = useState(searchParams.get('user'))
  const [bottomOpen, setBottomOpen] = useState(false)

  if (userId === null || userId === undefined) {
    return <div>Not logged in</div>
  }

  const handleOpen = () => {
    console.log('handle open ' + bottomOpen)

    bottomSheet.create({
      content: <HomeBottomSheet />,
      onClose() {
        setBottomOpen(false)

        console.log('on close ' + bottomOpen)
      },
    })
  }

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div className="flex flex-col justify-center items-center">
        <div className="self-end">
          <UserCell id={parseInt(userId)} />
        </div>

        <div className="rooms-list flex flex-col justify-center items-center">
          <RoomsCell />
        </div>

        <Button
          sx={{ maxWidth: 'max-content', position: 'fixed', bottom: '1em' }}
          variant="contained"
          size="large"
          onClick={() => {
            setBottomOpen(!bottomOpen)
            bottomOpen ? handleOpen() : bottomSheet.close()
          }}
        >
          CREATE ROOM
        </Button>

        <div>
          <HomeBottomSheet />
        </div>
      </div>
    </>
  )
}

export default HomePage
