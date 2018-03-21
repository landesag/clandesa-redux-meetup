import React from "react";
import Card, {
  CardActions,
  CardContent,
  CardMedia
} from "material-ui-next/Card";
import Typography from "material-ui-next/Typography";

const Todo = ({ todo }) => (
  <Card style={{ marginBottom: "10px" }}>
    <CardContent>
      <Typography variant="headline" component="h4">
        {todo.name}
      </Typography>
    </CardContent>
  </Card>
);
export default Todo;
