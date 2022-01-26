import { Card, CardContent, Typography, Grid, Avatar } from '@mui/material'

function stringAvatar(name: string) {
  return {
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  }
}

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
                  <Avatar
                    {...stringAvatar(
                      `${participant.firstName} ${participant.lastName}`
                    )}
                  />
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
