import {
  Card,
  CardContent,
  Typography,
  Grid,
  Badge,
  IconButton,
} from '@mui/material'
import StringAvatar from 'src/components/StringAvatar/StringAvatar'
import { Phone } from '@mui/icons-material'
import { userStore } from 'src/store/user_store'
import { socket } from 'src/lib/socket-events'
import { makeCall } from 'src/lib/peer-events'

const UserCard = ({ user }) => {
  return (
    <Card sx={{ maxWidth: 'max-content', minWidth: 300, padding: '0.5em' }}>
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
              color={user.online ? 'success' : 'error'}
            >
              <StringAvatar string={`${user.firstName} ${user.lastName}`} />
            </Badge>
          </Grid>

          <Grid item xs={8}>
            <Typography gutterBottom variant="subtitle1" component="div">
              {`${user.firstName} ${user.lastName}`}
            </Typography>
            <p>{user.online ? 'online' : 'offline'}</p>
          </Grid>

          <Grid item xs={1}>
            <IconButton
              className="mr-8"
              onClick={() => {
                console.log('make call')
                console.log(user)

                makeCall(user.peerId)
              }}
            >
              <Phone />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default UserCard
