import { Card, CardContent, Typography, Grid, Avatar } from '@mui/material'
import StringAvatar from 'src/components/StringAvatar/StringAvatar'


const RoomCard = ({ room }) => {
  return (
    <Card sx={{ maxWidth: 600, minWidth: 400 }}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {room.title}
        </Typography>

        <div className="participants">
          <Grid container spacing={2}>
            {room.participants.map((participant) => {
              return (
                <Grid key={participant.id} item xs={3}>
                  <StringAvatar string={`${participant.firstName} ${participant.lastName}`}/>
                </Grid>
              )
            })}
          </Grid>
        </div>
      </CardContent>
    </Card>
  )
}

export default RoomCard
