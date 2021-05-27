import React, { useContext } from 'react'
import { Context } from '../Context'

export default function Yaudios() {
    const { yaud } = useContext(Context)
    const [aud] = yaud
    return (
        <div className="container-fluid">
            <div className="row justify-content-around mb-3">
                <h3 className="text-center text-primary m-3">Your Memories</h3>
                {
                    aud ?
                        aud.map((a, i) => (
                            <div className="col-auto mb-3" key={i}>
                                <audio src={`data:audio/wav;base64,${Buffer.from(a.data).toString()}`} controls ></audio>
                                <h5 className="text-center text-success">{a.name}</h5>
                            </div>
                        ))
                        :
                        <h5 className="text-center text-danger">Loading...</h5>
                }
            </div>
        </div>
    )
}
