function User(props) {
  console.log(props);
  return (
    <span className="user">
      <span className="name"> {props.userProps.name} </span>
      <span className="handle">{props.user}</span>
    </span>
  );
}

export default User;
