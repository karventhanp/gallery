import React, { useContext } from 'react'
import { Context } from '../Context'

export default function Yvideos() {
    const { yvid } = useContext(Context)
    const [vid] = yvid
    return (
        <div className="container-fluid">
            <div className="row justify-content-around">
                <h3 className="text-primary m-3 text-center">Your Memories</h3>
                {
                    vid ?
                        vid.map((v, i) => (
                            <div className="col-auto mb-3" key={i}>
                                <div className="card" style={{ width: "18rem" }}>
                                    <video src={`data:video/mp4;base64,${Buffer.from(v.data).toString()}`} controls></video>
                                    <h5 className="text-center text-success m-1">{v.name}</h5>
                                </div>
                            </div>
                        ))
                        :
                        <h5 className="text-danger text-center">Loading...</h5>
                }
            </div>
        </div>
    )
}
