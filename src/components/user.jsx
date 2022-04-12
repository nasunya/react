import Qualities from "./qualitie";
import BookMark from "../components/bookMark";

const User = ({_id, name, qualities, onDelete, profession,completedMeetings, bookmark, onToggleBookmar, rate }) => {
  return (
    <tr key={_id}>
      <td>{name}</td>
      <td>{qualities.map((quality => 
            <Qualities 
              key={quality._id} 
              color={quality.color} 
              name={quality.name} /> ))}</td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate} /5</td>
      <td>
        <BookMark 
            status = {bookmark} 
            onToggleBookmar={onToggleBookmar} /></td>
      <td><button className='btn btn-danger' onClick={() => onDelete(_id)}>delete</button></td>
    </tr>
  )
}

export default User