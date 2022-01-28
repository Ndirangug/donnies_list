import { Card, CardContent, Typography, Grid, Avatar } from '@mui/material'

function stringAvatar(name: string) {
  return {
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  }
}

const StringAvatar = ({ string }) => {
  return <Avatar {...stringAvatar(string)} />
}

export default StringAvatar
