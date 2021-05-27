import React, {useContext } from 'react'
import {Context} from '../Context'

export default function Yimages() {
    const {yimg} = useContext(Context)
    const [img]=yimg
    return (
        <div className="container-fluid">
            <div className="row justify-content-around">
                <h3 className="text-center text-primary m-3">Your Memories</h3>
                {
                    img ?
                    img.map((img,index)=>(
                        <div className="col-auto mb-3" key={index}>
                        <div className="card" style={{width:"18rem"}}>
                        <img src={`data:image/jpeg;base64,${Buffer.from(img.data).toString()}`} alt="yourphoto" className="card-img"/>
                        <div className="card-text">
                            <h5 className="text-center text-success m-1">{img.name}</h5>
                        </div>
                        </div>
                        </div>
                    ))
                    :
                    <h5 className="text-center text-danger">Loading...</h5>
                }
            </div>

        </div>
    )
}
