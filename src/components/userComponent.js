import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../redux';
import Card from './cardComponent'

const UserComponent = () => {

    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users)
    const loading = useSelector(state => state.users.loading)
    const error = useSelector(state => state.users.error)

    console.log('users',users)
    console.log('loading', loading)
    console.log('error', error)

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    return(
        <>
            {loading && <p>Loading..</p>}
            {users.length > 0 && users.map((user) => (
                <Card user={user} key={user.id} />
            ))}
            {users.length === 0 && <p>No users available</p>}
            {error && !loading && <p>{error}</p>}
        </>
    )
}

export default UserComponent