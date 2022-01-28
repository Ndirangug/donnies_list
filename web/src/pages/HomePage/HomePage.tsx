import { MetaTags } from '@redwoodjs/web'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import UserCell from 'src/components/UserCell/UserCell'
import RoomsCell from 'src/components/RoomsCell/RoomsCell'
import HomeBottomSheet from 'src/components/HomeBottomSheet/HomeBottomSheet'
import { Button } from '@mui/material'
import { bottomSheet } from 'react-simple-bottom-sheet'
import { socket } from 'src/lib/socket-events'
import { peer, setOnlinePeer } from 'src/lib/peer-events'
import { useMutation } from '@redwoodjs/web'
import { SET_USER_ONLINE_PEER } from 'src/lib/update_user'
import { userStore } from 'src/store/user_store'

const HomePage = () => {
  // call all necesaary hooks
  const [searchParams] = useSearchParams()
  const [userId] = useState(searchParams.get('user'))
  const [bottomOpen, setBottomOpen] = useState(false)
  const [mutateUserPeerOnline] = useMutation(SET_USER_ONLINE_PEER)

  //if not logged in just return at this point
  if (userId === null || userId === undefined) {
    return <div>Not logged in</div>
  }

  // at this point user is logged in and online
  setOnlinePeer(userId, mutateUserPeerOnline)
  // userStore

  const handleOpen = () => {
    bottomSheet.create({
      content: <HomeBottomSheet />,
      onClose() {
        setBottomOpen(false)
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

        <div className="audio fixed left-0 top-0">
          <audio id="audio" controls>
            <track kind="captions"></track>
          </audio>
        </div>
      </div>
    </>
  )
}

export default HomePage
