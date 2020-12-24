import React, { Component } from 'react'
import Address from './Address'

class Center extends Component {
    // constructor()
    // {
    //     super()
    //     this.state={
    //         searchData:null,
    //         nodata: false,
    //     }
    // }
    // search(key)
    // {
    //     console.warn(key)
    //     fetch("https://gist.githubusercontent.com/yoobi55/5d36f13e902a75225a39a8caa5556551/raw/cbd57cfdddbdfc009fd9ccdadf5fb7129af71c73/restaurant-data.json?q="+key).then((data) => {
    //         data.json().then((resp) => {
    //             console.warn("resp",resp)
    //             if(resp.length>0){
    //                 this.setState({searchData:resp,data:false})
    //             }
    //             else
    //             {
    //                 this.setState({nodata:true, searchData:null})
    //             }
    //         })
    //     })
    // }
    render() {
        return (
            <div>
                <div className="upper">
                <div className="context">
                    <p className="bottom_logo">
                    Your favourite food, delivered with FoodHub </p>
                    <p className="bottom_logo1">
                    Enter your current location
                    </p>
                    <Address/>
                    {/* </p>
                    <input type="text" className="search" onChange={(event)=>this.search(event.target.value)}/>
                    <div>
                        {
                            this.state.searchData?
                            <div>
                                {
                                    this.state.searchData.map((item)=> 
                                    <div>
                                        {item.name}
                                    </div>
                                    )

                                }
                            </div>
                            :""
                        }
                        {
                            this.state.nodata? <h3>No Data Found</h3>:null
                        }
                    </div> */}
                </div>
            </div>
            </div>

        );
    }
}

export default Center
