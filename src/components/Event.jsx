import React, { Component } from 'react';
import Banner from './Banner';

function Events() {
    return ( <div>
        <Banner />
        <div>
        <a href="#" className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row w-full hover:bg-gray-100  ">
    <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80" alt="" />
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">Lorem Ipsum</h5>
        <p className="mb-2 font-normal text-xs text-gray-700  ">Date: 10/9/2022 </p>
        <p className="mb-3 font-normal text-gray-700 ">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
    </div>
</a></div>
    </div> );
}

export default Events;