import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { adminMovieAPI, deleteMovieAPI } from '../services/allApis'
import EditMovie from '../Components/EditMovie'
import { Link } from 'react-router-dom'


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

    const handleDelete = async (e,id)=>{
        e.preventDefault()
        const reqHeader = {
            "Content-Type": "application/json" , "Authorization" : `Bearer ${token}`
        }
        const result = await deleteMovieAPI(id,reqHeader)
        if(result.status===200){
            alert("Removed Successfully")
            getAdminMovies()
        }else{
            console.log(result);
            alert(result.response.data)
        }
    }

    return (
        <div>
            <div>
                <div className='text-center bg-dark ' style={{ paddingTop: '100px',minHeight:'100vh' }}>
                    <h3 className='text-white mb-3'>Movie List</h3>
                    <div className='container ps-5 pe-5 pb-5' style={{height:'500px',overflowY:'scroll',overflowX:'hidden',border:'1px solid grey'}}>
                        <div className="mt-5">
                            {movies?.length > 0 ? movies?.map((movie,index) => (
                                <div className="border container d-flex align-items-center text-primary rounded p-2 mt-3">
                                    <h5 className='text-secondary ms-5'>{index+1}</h5>
                                    <h5 className='text-info ms-5'>{movie.moviename}</h5>
                                    <div className="icons ms-auto me-5">
                                        <button className='btn'><EditMovie displayMovie={movie}/></button>
                                        <button onClick={(e)=>handleDelete(e,movie._id)} className='btn me-2' ><i class="fa-solid fa-trash text-danger"></i></button>
                                    </div>
                                </div>
                            )) :
                                <p className='text-danger fs-3'>No Movies uploaded</p>
                            }
                        </div>
                    </div>
                    <Link to={'/admin'}><button className='btn btn-outline-warning mt-3 mb-3'>Add Movies</button></Link>
                </div>
            </div>
        </div>
    )
}

export default AdminMovies