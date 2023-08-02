import './List.css'
import Button from "../button/Button"

function List({editList, list, deleteList}) {
  return (
    <li className="list">
        <div className="list-head">
            {
                <span>{list.title}</span>
            }
            <span>{list.content}</span>
            <span>{list.createdAt}</span>
        </div>
        <div className="btns">
            <Button className={'edit'} title={'Edit'} onClick={() => editList(list.id)}/>
            <Button className={'delete'} title={'Delete'} onClick={() => deleteList(list.id)}/>
        </div>
    </li>
  )
}

export default List