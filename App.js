import './App.css';
import Content from './Content'
import { useState, memo, useMemo } from 'react';



// function App() {
//   //chuyen dl ve mang de hien thi (2)
//   const storageJobs = JSON.parse(localStorage.getItem('jobs'))

//   const [job, setJob] = useState('')
//   const [jobs, setJobs] = useState(storageJobs ?? []) //hien thi

//   const handleSubmit = () => {
//     setJobs(prev => {
//       const newJobs = [...prev, job]
//       // chuyen sang Json de luu tru (1)
//       const jsonJobs = JSON.stringify(newJobs)
//       localStorage.setItem('jobs',jsonJobs)

//       return newJobs
//     })
//     setJob('')
//   }


//   return (
//     <div style={{padding: 32}}>
//       <input value={job} onChange={e => setJob(e.target.value)}/>
//       <button onClick={handleSubmit}>Add</button>
//       <ul>
//         {jobs.map((job, index) => (
//           <li key={index}>{job}</li>

//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;


function App() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [products, setProducts] = useState([])

  const handleSubmit = () => {
      setProducts([...products, {
        name,
        price: Number(price)
      }])
      setName('')
      setPrice('')
  }


const total = useMemo(() => {
  const result = products.reduce((result, prod) => {
  console.log("products...")
    return result + prod.price
  },0)
    return result
}, [products])

  return (
    <div style={{padding: '10px 32px'}}>
      <input 
        value={name}
        placeholder="enter name"
        onChange={ e => setName(e.target.value)}
      />
      <br/>
      <input
        value={price}
        placeholder="enter price"
        onChange={ e => setPrice(e.target.value)}
      />
      <br/>
      <button class="mb" onClick={handleSubmit}>Add</button>
      <br/>
      Total:{total}
      <ul>
          {products.map((products, index) => (
            <li key={index}>{products.name} - {products.price}</li>
          ))}
      </ul>
    </div>
  )
}

export default App;
