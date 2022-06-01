import style from "./NewUser.module.css";

const NewUser = (props) => {
  return (
    <button key={props.object[0].id} className={style["new-user"]}>
      {props.object[0].newUsername} ({props.object[0].newAge} years old)
    </button>
  );
};
export default NewUser;
