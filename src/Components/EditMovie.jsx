import React from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { BASEURL } from '../services/baseUrl';
import { useEffect } from 'react';
import { editMovieAPI } from '../services/allApis';

function EditMovie({ displayMovie }) {
    const [movies,setMovies] = useState({
        id:displayMovie._id,moviename: displayMovie.moviename, language: displayMovie.language, director: displayMovie.director, transalator: displayMovie.transalator, genre:displayMovie.genre, imdb:displayMovie.imdb, info: displayMovie.info, movieImage: "", subfile: ""
    })

    const [preview,setPreview] = useState("")
    const [show, setShow] = useState(false);

    useEffect(()=>{
        if(movies.movieImage){
            setPreview(URL.createObjectURL(movies.movieImage))
        }else{
            setPreview("")
        }
    },[movies.movieImage])
    console.log(movies);

    useEffect(() => {
        if (movies.subfile) {
            URL.createObjectURL(movies.subfile)
        }
    }, [movies.subfile]) 

    const handleClose = ()=>{
        setShow(false)
        setPreview("")
        setMovies({
            moviename: displayMovie.moviename, language: displayMovie.language, director: displayMovie.director, transalator: displayMovie.transalator, genre:displayMovie.genre, imdb:displayMovie.imdb, info: displayMovie.info, movieImage: "", subfile: ""
        })
    }

    const handleSave = async (e)=>{
        e.preventDefault()
        const {id, moviename, language, director, transalator, genre, imdb, info, movieImage, subfile } = movies

        if(!moviename || !language || !director || !transalator || !genre || !imdb || !info ) {
            alert("Please fill the form completely")
        }else{
            const token = sessionStorage.getItem("token")
            const reqBody = new FormData()
            reqBody.append("moviename", moviename)
            reqBody.append("language", language)
            reqBody.append("director", director)
            reqBody.append("transalator", transalator)
            reqBody.append("genre", genre)
            reqBody.append("imdb", imdb)
            reqBody.append("info", info)
            movieImage?reqBody.append("movieImage", movieImage):reqBody.append("movieImage", displayMovie.movieImage)
            subfile?reqBody.append("subfile", subfile):reqBody.append("subfile", displayMovie.subfile)   
            if(movieImage || subfile){
                const reqHeader = {
                    "Content-Type": "multipart/form-data" , "Authorization" : `Bearer ${token}`
                } 
                const result = await editMovieAPI(id,reqBody,reqHeader)
                if(result.status===200){
                    handleClose()
                    alert("movie updated")
                }else{
                    console.log(result);
                    alert(result.response.data)
                }
            }else{
                const reqHeader = {
                    "Content-Type": "application/json" , "Authorization" : `Bearer ${token}`
                } 
                const result = await editMovieAPI(id,reqBody,reqHeader)
                if(result.status===200){
                    handleClose()
                    alert("movie updated")
                }else{
                    console.log(result);
                    alert(result.response.data)
                }
            }    
        }
    }
    return (
        <div>
            <button onClick={() => setShow(true)} className='btn me-2' ><i class="fa-solid fa-edit text-success"></i></button>

            <Modal
                size="lg"
                show={show}
                onHide={() => handleClose()}
                aria-labelledby="example-modal-sizes-title-lg"
                class="modal-dialog modal-fullscreen"
                style={{ backgroundColor: 'black' }}
            >
                <Modal.Header closeButton className='bg-warning'>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        <h6> Edit Movies</h6>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-dark'>
                    <div className='w-100'>
                        <label htmlFor="profileimg" className='text-center'>
                            <input id='profileimg' type="file" style={{ display: 'none' }} onChange={e=>{setMovies({...movies,movieImage:e.target.files[0]})}} />
                            <img width={'80px'} src={preview?preview:`${BASEURL}/uploads/${displayMovie.movieImage}`}
                                alt="pp" />
                        </label>
                        <input type="text" className='form-control' placeholder='Project name' value={movies.moviename?movies.moviename:displayMovie.moviename}
                        onChange={e=>{setMovies({...movies,moviename:e.target.value})}} />

                        <input type="text" className='form-control' placeholder='Language' value={movies.language?movies.language:displayMovie.language}
                        onChange={e=>{setMovies({...movies,language:e.target.value})}} />

                        <input type="text" className='form-control' placeholder='Director' value={movies.director?movies.director:displayMovie.director}
                         onChange={e=>{setMovies({...movies,director:e.target.value})}} />

                        <input type="text" className='form-control' placeholder='Transalator' value={movies.transalator?movies.transalator:displayMovie.transalator}
                         onChange={e=>{setMovies({...movies,transalator:e.target.value})}} />

                        <input type="text" className='form-control' placeholder='Genre' value={movies.genre?movies.genre:displayMovie.genre}
                         onChange={e=>{setMovies({...movies,genre:e.target.value})}} />

                        <input type="text" className='form-control' placeholder='Imdb' value={movies.imdb?movies.imdb:displayMovie.imdb}
                         onChange={e=>{setMovies({...movies,imdb:e.target.value})}} />

                        <input type="text" className='form-control' placeholder='Info' value={movies.info?movies.info:displayMovie.info}
                         onChange={e=>{setMovies({...movies,info:e.target.value})}} />

                        <input  type="file" className='form-control' placeholder='Subfile'
                         onChange={e => setMovies({ ...movies, subfile: e.target.files[0] })}/>

                        <button onClick={handleSave} className='btn btn-warning' >Upload</button>
                        <button onClick={handleClose} className='btn btn-info' >Cancel</button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>

    )
}

export default EditMovie

