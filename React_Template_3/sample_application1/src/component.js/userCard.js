import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';



export default function UserCard({searchTerm, userData}) {
    const userInfo = filterUsers(searchTerm, userData)[0]
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
            <List>
                <ListItem>user : {userInfo.username}</ListItem>
                <ListItem>email : {userInfo.email}</ListItem>
                <ListItem>phone : {userInfo.phone}</ListItem>
            </List>
      </CardContent>
    </Card>
  );
}

const filterUsers = (search, users) => {
    const searchTerm = search.toUpperCase()
    return users.filter(user => {
        const str = user.name.toUpperCase()
        return str.indexOf(searchTerm) >= 0
    })
}
