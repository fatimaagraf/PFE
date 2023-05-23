import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { DLT,ADD,REMOVE} from '../../redux/actions/action';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function CardsDetails() {

    const [data, setData] = useState([])
    //console.log(data);

    const { id } = useParams()
    //console.log(id);
    const history = useNavigate();
    const dispatch = useDispatch();


    const getdata = useSelector((state) => state.cartreducer.carts)
    //console.log(getdata);

    const compare = () => {
        let comparedata = getdata.filter((e) => {
            return e.id == id
        })
        setData(comparedata);
    }
// add data
const send= (e)=>{
    //console.log(e 
    dispatch(ADD(e))
  }

    const dlt = (id) => {
        dispatch(DLT(id));
        history("/");
    }

    // remove one
const remove = (item)=>{
    dispatch(REMOVE(item))
  }
  
    useEffect(() => {
        compare()
    }, [id])
    return (
        <>
            <div className="container " style={{ marginTop: 110 }}>
                <h2 className="text-center">
                    Iteams Details Page
                </h2>

                <section class="main ">
                    <div className='iteamsdetails'>
                        {
                            data.map((ele) => {
                                return (
                                    <>
                                        <div className="items_img">

                                            <img src={ele.image} />

                                        </div>
                                        <div className="details" style={{ marginLeft: "49rem", marginTop: "-6rem", color: "black", textAlign: "center" }}>
                                            <Table>
                                                <tr>
                                                    <td>
                                                        <p> <strong > Lamara  </strong> : {ele.title}   </p><br />
                                                        <p> <strong >Price  </strong> : ${ele.price} </p><br />
                                                        <p> <strong >Type  </strong> : {ele.type}   </p><br />
                                                        <p> <strong>Total  </strong> : $ {ele.price * ele.qnty} </p><br />


                                                        <div className='mt-5 d-flex justify-content-between align-items-center' style={{ width: 100,height:40, cursor: "pointer", background: "#ddd", color: "#111",marginTop:"2rem" }}>
                                                            <span style={{ fontSize: 24,marginRight:"2.5rem" }} onClick={ele.qnty <=1 ? ()=>dlt(ele.id) : ()=>remove(ele)}>-</span>
                                                            <span style={{ fontSize: 22,textAlign:"center"  }}>{ele.qnty}</span>
                                                            <span style={{ fontSize: 24,marginLeft:"1.7rem" }} onClick={()=>send(ele)}>+</span>

                                                        </div>
                                                    </td> <br /><br /><br />
                                                    <td>
                                                        <p><strong>Rating :</strong> <span style={{ background: 'green', color: "#fff", padding: "2px 5px", borderRadius: "5px" }}> {ele.rating} ★</span></p><br />
                                                        <p><strong>Order Review :</strong><span >{ele.occasion}</span></p><br />
                                                        <p><strong>Remove :</strong><span><i className='fas fa-trash' onClick={() => dlt(ele.id)} style={{ color: "red", fontSize: 20, cursor: "pointer" }}></i></span><span></span></p>
                                                        <p><strong></strong><span></span></p>
                                                    </td>
                                                </tr>
                                            </Table>
                                        </div>


                                    </>
                                )
                            })
                        }





                    </div>

                </section>
            </div>

        </>
    )
}

export default CardsDetails;