import React from 'react';
import { render } from 'react-dom';
import {Trailer} from "./App"


const Grid = ({ config, data }) => (
    <table>
      <Thead config={config}></Thead>
      <Tbody data={data} config={config}></Tbody>
    </table>
);


const Thead = ({config}) => {
  return(
    <thead>
      <tr >
        {config.map( ({title}, index) => {
            return (
              <th key={index}>
                <span>{title}</span>
              </th>
            )
        })}
      </tr>
    </thead>
  )
}



const Tbody = ({data}) => {
  return(
    <tbody>
    {data.map( (item) => {
      return (
        <tr key={item.imdbID}>
          <td>{item.imdbID}</td>
          <td>{item.Title}</td>
          <td>{item.imdbRating}</td>
          <td><Trailer data={item.Trailer}></Trailer></td>
        </tr>
      )
    })}
  </tbody>
  )
}


export default Grid;