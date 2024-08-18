import React, {useState} from "react";
import Axios from "axios";

export default class HousePricePred extends React.Component{
    constructor(){
        super();
        this.state={
            clickCount : 0,
            bhk : 0,
            totalArea : 0,
            predictedPrice : 0,
            loading: true
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleTotalArea = this.handleTotalArea.bind(this)
    }

    incrementClickCount(){
        this.setState({clickCount : this.state.clickCount+1})
    }

    handleChange(event){
        this.setState({bhk : event.target.value})
    }

    handleTotalArea(event){
      this.setState({totalArea : event.target.value})
    }

    getResult(){
      //this.setState({clickCount : this.state.clickCount+1})
      Axios.get(`/api/${this.state.bhk}/${this.state.totalArea}`).then((response)=>{
        this.setState({
          predictedPrice: response.data.housePrice,
          loading: false
        })        
      })
      
      this.setState({
        clickCount : this.state.clickCount + 1
      })

      
    }

    

    render(){
        const {clickCount} = this.state
        return(
        <div>
            {/* BHK input */}            
            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                BHK 
              </label>
              <div className="mt-2">
                <select
                  id="bhk"
                  name="bhk"
                  autoComplete="bhk"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  value={this.state.bhk}
                  onChange={this.handleChange}
                >
                  <option value={0}>Select BHK value</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                </select>
              </div>
            </div>

            {/* Total area input */}
            <div className="col-span-full">
              <label htmlFor="total-area" className="block text-sm font-medium leading-6 text-gray-900">
                Total Area (in sq. ft)
              </label>
              <div className="mt-2">
                <input
                  id="total-area"
                  name="total-area"
                  type="number"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={this.state.totalArea}
                  onChange={this.handleTotalArea}
                />
              </div>
              <div>
              <button
               type="submit"
               className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
               onClick={()=>{this.getResult()}}
              >
               Predict
              </button>
              </div>
            </div>

            {/* Result */}
            <div>
              {
                clickCount>0 && (
                  <p>
                    {this.state.loading?(<p>Loading...</p>):(<p>Rs. {this.state.predictedPrice}</p>)}
                  </p>
                )                
              }
            </div>
        </div>
        );
    }
}