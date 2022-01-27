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
import { socket } from 'src/lib/socket'

const UserCard = ({ user }) => {
  return (
    <Card sx={{ maxWidth: 600, minWidth: 400 }}>
      <CardContent>
        <Grid container spacing={2}>
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

          <Grid item xs={9}>
            <Typography gutterBottom variant="h6" component="div">
              {`${user.firstName} ${user.lastName}`}
            </Typography>
            <p>{user.online ? 'online' : 'offline'}</p>
            <IconButton
              onClick={() => {
                socket.emit('join_room', {})
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
