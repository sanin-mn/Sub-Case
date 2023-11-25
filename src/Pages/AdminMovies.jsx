import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { adminMovieAPI } from '../services/allApis'

function AdminMovies() {
    const [movies, setMovies] = useState([])
    const [token, setToken] = useState("")

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            setToken(sessionStorage.getItem("token"))
        }
    }, [])
    console.log(token);
    const getAdminMovies = async () => {
        const reqHeader = {
            "Content-Type": "application/json", "Authorization": `Bearer ${token}`
        }
        const result = await adminMovieAPI(reqHeader)
        if (result.status === 200) {
            setMovies(result.data)
        } else {
            alert(result.response.data)
        }
    }

    useEffect(() => {
        if (token) {
            getAdminMovies()
        }
    }, [token])


    return (
        <div>
            <div>
                <div className='text-center vh-100 bg-dark ' style={{ paddingTop: '100px' }}>
                    <h1 className='text-white'>Admin Movies</h1>
                    <div className="mt-5">
                        {movies?.length > 0 ? movies?.map(movie => (
                            <div className="border container d-flex align-items-center text-primary rounded p-2 mb-3">
                                <h5 className='text-white'>{movie.moviename}</h5>
                                <div className="icons ms-auto">
                                    <button className='btn me-2' ><i class="fa-solid fa-edit text-success"></i></button>
                                    <button className='btn me-2' ><i class="fa-solid fa-trash text-danger"></i></button>
                                </div>
                            </div>
                        )) :
                            <p className='text-danger fs-3'>No Movies uploaded</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminMovies