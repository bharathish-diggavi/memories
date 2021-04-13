import useStyles from "./styles";
import Post from "./Post/Post";
const Posts = () => {
  const classes = useStyles();
  return (
    <div>
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
