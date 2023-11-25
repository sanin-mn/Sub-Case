import React from 'react'
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addMovieAPI } from '../services/allApis';
import { Link } from 'react-router-dom';

function Admin() {
    const [token,setToken] = useState("")
    const [movieDetails, setMovieDetails] = useState({
        moviename: "", language: "", director: "", transalator: "", genre: "", imdb: "", info: "", image: "", subfile: "", userId: ""
    })
    const [preview, setPreview] = useState("")
    useEffect(() => {
        if (localStorage.getItem("existingUser")&&sessionStorage.getItem("token")) {
            setMovieDetails({ ...movieDetails, userId: JSON.parse(localStorage.getItem("existingUser"))._id })
            setToken(sessionStorage.getItem("token"))
        }
    }, [])

    useEffect(() => {
        if (movieDetails.image) {
            setPreview(URL.createObjectURL(movieDetails.image))
        }
    }, [movieDetails.image])

    useEffect(() => {
        if (movieDetails.subfile) {
            URL.createObjectURL(movieDetails.subfile)
        }
    }, [movieDetails.subfile])

    const clearForm = () => {
        setPreview("")
        setMovieDetails({
            moviename: "", language: "", director: "", transalator: "", genre: "", imdb: "", info: "", image: "", subfile: "", userId: ""
        })
    }
    console.log(movieDetails);
    const handleUpload = async (e) => {
        e.preventDefault()
        const { moviename, language, director, transalator, genre, imdb, info, image, subfile, userId } = movieDetails
        if (!moviename || !language || !director || !transalator || !genre || !imdb || !info || !image || !subfile || !userId) {
            toast.info("Please fill the form completely")
        } else {
            const reqBody = new FormData()
            reqBody.append("moviename", moviename)
            reqBody.append("language", language)
            reqBody.append("director", director)
            reqBody.append("transalator", transalator)
            reqBody.append("genre", genre)
            reqBody.append("imdb", imdb)
            reqBody.append("info", info)
            reqBody.append("movieImage", image)
            reqBody.append("subfile", subfile)
            reqBody.append("userId", userId)

            const reqHeader = {
                "Content-Type": "multipart/form-data" , "Authorization" : `Bearer ${token}`
            }
            const result = await addMovieAPI(reqBody, reqHeader)
            console.log(result);
            if (result.status === 200) {
                toast.success(`${result.data.moviename} added successfully`)
            } else {
                toast.warning(result.response.data)
                console.log(result);
                setMovieDetails({
                    moviename: "", language: "", director: "", transalator: "", genre: "", imdb: "", info: "", image: "", subfile: ""
                })
            }
        }
    }

    return (
        <>
            <div className='bg-dark' style={{ paddingTop: '100px' }}>

                <h4 className='text-white mt-3 text-center'>Admin</h4>
                <div className='w-100 d-flex justify-content-center'>
                    <div className='text-white p-4 mb-5' style={{ backgroundColor: 'black', height: 'max-content', width: '500px' }}>
                        <div className='w-100'>
                            <label htmlFor="profileimg" className='text-center'>
                                <input id='profileimg' onChange={e => setMovieDetails({ ...movieDetails, image: e.target.files[0] })} type="file" style={{ display: 'none' }} />
                                <img  width={'80px'} src={preview ? preview : "https://tse2.mm.bing.net/th?id=OIP.g8WcRlCDEoR6jW4dnWJp2gHaHa&pid=Api&P=0&h=180"}
                                    alt="pp" />
                            </label>
                            <input type="text" className='form-control' placeholder='Project name' value={movieDetails.moviename}
                                onChange={e => setMovieDetails({ ...movieDetails, moviename: e.target.value })} />

                            <input type="text" className='form-control' placeholder='Language' value={movieDetails.language}
                                onChange={e => setMovieDetails({ ...movieDetails, language: e.target.value })} />

                            <input type="text" className='form-control' placeholder='Director' value={movieDetails.director}
                                onChange={e => setMovieDetails({ ...movieDetails, director: e.target.value })} />

                            <input type="text" className='form-control' placeholder='Transalator' value={movieDetails.transalator}
                                onChange={e => setMovieDetails({ ...movieDetails, transalator: e.target.value })} />

                            <input type="text" className='form-control' placeholder='Genre' value={movieDetails.genre}
                                onChange={e => setMovieDetails({ ...movieDetails, genre: e.target.value })} />

                            <input type="text" className='form-control' placeholder='Imdb' value={movieDetails.imdb}
                                onChange={e => setMovieDetails({ ...movieDetails, imdb: e.target.value })} />

                            <input type="text" className='form-control' placeholder='Info' value={movieDetails.info}
                                onChange={e => setMovieDetails({ ...movieDetails, info: e.target.value })} />

                            <input type="file" className='form-control' placeholder='Subfile'
                                onChange={e => setMovieDetails({ ...movieDetails, subfile: e.target.files[0] })} />

                                <button className='btn btn-warning' onClick={handleUpload}>Upload</button>
                                <button className='btn btn-info' onClick={clearForm}>Cancel</button>
                        </div>
                    </div>
                    <Link to={'/adminmovies'}><p className='text-white'>admin movie</p></Link>

                </div>

            </div>
            <ToastContainer position='top-center'
                autoClose={2000} theme='colored' />
        </>
    )
}

export default Admin