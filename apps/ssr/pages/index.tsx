import axios from 'axios';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';

export function Index({ data }) {
  console.log(data);

  return (
    <div>
      <h1>This is a SSR (server-side rendering) rendering !</h1>
        {data.map(obj => (
              <Box sx={{ minWidth: 275 }} key={obj.id}>
                <Card variant="outlined" sx={{width: '20%', m: 2}}>
                  <React.Fragment>
                    <CardContent>
                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        id: {obj.id}
                      </Typography>
                      <Typography variant="h5" component="div">
                        {obj.title}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        userId: {obj.userId}
                      </Typography>
                      <Typography variant="body2">
                        {obj.body}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </React.Fragment>
                </Card>
              </Box>
        ))}
    </div>
  )
}

export async function getServerSideProps() {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
  const data = await JSON.parse(JSON.stringify(res.data))

  return { props: { data } }
}

export default Index;
