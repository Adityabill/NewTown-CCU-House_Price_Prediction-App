import React, {useState} from "react";

export default class HousePricePred1 extends React.Component{
    constructor(){
        super();
        this.state={
            clickCount : 0,
            bhk : 0,
            totalArea : 0
        }

        this.handleChange = this.handleChange.bind(this)
    }

    incrementClickCount(){
        this.setState({clickCount : this.state.clickCount+1})
    }

    handleChange(event){
        this.setState({bhk : event.target.value})
    }

    

    render(){

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
                />
              </div>
            </div>

            {/* Result */}
            <div>
              <p>{this.state.bhk}</p>
            </div>
        </div>
        );
    }
}