import React from 'react'
import Breadcrumb from '../../../shared/header/Breadcrumb'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTodos } from '../../../../store/features/todos/todosSlice'

const ToDos = () => {

    const dispatch = useDispatch()

    function handleFetchTodos() {
        dispatch(fetchTodos())
    }

    // Get complete Redux state
    const { data, isLoading, error } = useSelector(
        (state) => state.todos
    )

    // if (isLoading) {
    //     return <h1 className="text-center">Loading...</h1>
    // }

    // if (error) {
    //     return <div>Error: {error}</div>
    // }


  return (
    <>
        <Breadcrumb pgTitle="ToDos"></Breadcrumb>
        <div className="container py-5">
            <div className="row">
                <div className="col-12 text-center">
                    <h3 className="form-label m-0">ToDos Page</h3>
                    <br/>
                    <br/>
                    <button className="comn-btn gradient-btn" onClick={handleFetchTodos}>Fetch Todos</button>
                </div>
                <div className="col-12 mt-5">
                    <ul className="list-group">
                        {isLoading 
                            ? <h1 className="text-center">Loading...</h1>
                            : error ? <div>Error: {error}</div>
                            : data && data.map((item, index)=>(
                                    <li key={index} className="list-group-item">{item.title}</li>
                                ))
                        }
                        {/* {data && data.map((item, index)=>(
                            <li key={index} className="list-group-item">{item.title}</li>
                        ))} */}
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default ToDos
