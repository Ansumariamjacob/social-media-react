import React, { useState } from 'react'
import Header from './Header'

const Searchpost = () => {
    var [name,setName]=useState("paru")
    const changeName=()=>{
        setName("Appu")
    }
  return (
    <div>
        <Header/>
        <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">{name}</label>
                    
                </div>
                
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button class="btn btn-success" onClick={ changeName} >SEARCH</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Searchpost