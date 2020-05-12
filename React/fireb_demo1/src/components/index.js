import React from 'react'
import FirebaseList from './Firebase'

export default function index({data}) {
    return (
        <div>
            
            
            <h1>Index Page {data}</h1>
            <div className="mt-3">
                <FirebaseList />
            </div>

            
        </div>
    )
}
