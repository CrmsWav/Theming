import styled from 'styled-components';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

/* eslint-disable-next-line */
export interface PostsListProps {}

const StyledPostsList = styled.div`
  color: pink;
`;

export function PostsList(props: PostsListProps) {
  return (
    <StyledPostsList>
      {/*{data.map(obj => (
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
      ))}*/}
    </StyledPostsList>
  );
}

export default PostsList;
