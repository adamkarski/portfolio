import { Component } from "react"

import Link from 'next/link'

export default class extends Component {
  render () {
    return (

      
<div className="bg-white mx-5 my-6 shadow-md rounded py-22 px-8 pt-6 pb-8 mb-4 flex flex-col">
  <div className="-mx-3 md:flex mb-6">
    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
    
      <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Imie" />
      <p className="text-red text-xs italic">Uzupełnij dane</p>
    </div>
    <div className="md:w-1/2 px-3">
    
      <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Nazwisko" />
    </div>
  </div>
 
  <div className="-mx-3 md:flex mb-2">
    <div className="md:w-full px-3">
      <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" htmlFor="grid-city">
        Wycena / pytanie
      </label>
      <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-city" type="text" placeholder="Albuquerque" />
    </div>
    
    
  </div>
</div>


      
      )
  }
}