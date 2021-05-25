import React, { useContext } from 'react'

import Header from '../Components/Header/Header'
import View from '../Components/View/View'
import {AuthContext} from "../store/context";

function ViewPost() {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <Header user={user?.displayName} />
            <View/>
        </div>
    )
}

export default ViewPost
