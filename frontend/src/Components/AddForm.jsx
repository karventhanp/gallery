import React, { useState } from 'react'
import axios from 'axios'

export default function AddForm() {
    const [form, setForm] = useState({})
    const [yfile, setYfile] = useState({})
    const [msg, setMsg] = useState({})
    const handleChange = (e) => {
        if (e.target.files) {
            setYfile({ ...yfile, file: e.target.files[0] })
        } else {
            setForm({ ...form, [e.target.name]: e.target.value })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { file } = yfile
        if (file === undefined) {
            setMsg({ filemsg: "File is empty!" })
            return false
        }
        else {
            const formdata = new FormData()
            formdata.append("file", file)
            formdata.append("formdata", Object.values(form))
            //console.log(Array.from(formdata))
            axios.post("http://localhost:5000/form/filedata", formdata)
                .then(res => {
                    if (res.status === 200){
                        setMsg({ successmsg: "Your Memories have successfully uploaded!" })
                        setForm({})
                        setYfile({})
                    }
                    else{
                        setMsg({ successmsg: "Error on uploading..." })
                    }
                })
                .catch(err => console.log(err))
        }
    }
    return (
        <div className="container">
            <div className="row  mt-5">
                <div className="col-xxxl-auto mb-3">
                    <h5 className="text-primary text-center mb-2">Upload Your Memories</h5>
                    <form onSubmit={handleSubmit} encType="multipart/form-data" className="bg-info text-white p-3">
                        <div className="form-group mb-2">
                            <label htmlFor="file" className="form-label"><strong>Choose your file </strong></label>
                            <input type="file"
                                id="file"
                                name="file"
                                className="form-control"
                                onChange={handleChange}
                                accept="image/*,audio/*,video/*"
                            />
                            <small className="text-white">{msg.filemsg ? msg.filemsg : ""}</small>
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="name" className="form-label"><strong>File Name</strong> </label>
                            <input type="text"
                                name="name"
                                id="name"
                                className="form-control"
                                placeholder="Enter Your File Name"
                                value={form.name}
                                onChange={handleChange}
                            />
                            <small className="text-white">Note : If you not fill , original filename will be saved</small>
                        </div>
                        <div className="form-group text-center">
                            <input type="submit" value="Submit" className="btn btn-outline-primary" />
                        </div>
                        <h5 className="mt-3 text-white text-center">{msg.successmsg ? msg.successmsg : ""}</h5>
                    </form>
                </div>
            </div>
        </div>
    )
}
