
import { useState, useEffect } from 'react'
import "./loading.css"


const Countries = () => {
    
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearch] = useState('')

    useEffect(() => {
      fetchData('https://restcountries.com/v3.1/all')
    }, [])
  
    const fetchData = async (url) => {

      try {
        const response = await fetch(url)
        const data = await response.json()
        if(data.status === 404){
          setData(404)
        }else{
          setData(data)
          setIsLoading(false)
        }

      } catch (error) {
        console.log(error)
      }
    }



    
    //for the search function just use 
    //let newdata = (the fetch api to search by word for country)
    //setData(..data, new data)
    //and if the users input is " " then just run the fetchData function again 

    
    const Template = (props) => {
      let result 
      let languages 
      let currency 
      let currencyvalues 
      let population = Number(props.population).toLocaleString("en-US")
      

      if(Object.keys(props.language).length > 1){
        const values = Object.values(props.language);
        result = values.join(', ');
        languages = `Languages: `
      }else{
        languages = `Language: `
        result = Object.values(props.language)
      }

      if(Object.keys(props.currency).length > 1){
        //const val= Object.values(props.currency)[0].name
        currencyvalues = ''
        let arr = Object.keys(props.currency)
        arr.forEach((element, index) => currencyvalues += element[index]+`, `)
        currency = `Currencies: `
      }else{
        currency = `Currency: `
        currencyvalues = Object.keys(props.currency)
      }

      return (
      <div className='country'>
        <img className='country_flag' src={props.flag} alt='flag'/>
        <h3 className='country_name'>{props.name}</h3>
        <div className='country_text'>
        <p><span style={{fontWeight: '600',}}>Capital: </span><span style={{fontWeight: '450'}}>{props.capital}</span></p>
        <p><span style={{fontWeight: '600',}}>{languages}</span><span style={{fontWeight: '450'}}>{result}</span></p>
        <p><span style={{fontWeight: '600',}}>Population: </span><span style={{fontWeight: '450'}}>{population}</span></p>
        <p><span style={{fontWeight: '600',}}>{currency}</span><span style={{fontWeight: '450'}}>{currencyvalues}</span></p>
        </div>
      </div>
      )

    }
    

    const handleChange = (e) => {
      const value = e.target.value
      setSearch(value)

      if(!searchTerm){
        fetchData('https://restcountries.com/v3.1/all')
      }else{
        fetchData(`https://restcountries.com/v3.1/name/${searchTerm}`)

      }
    }



    //<Template flag={data[0].flags.svg} name={data[0].name.common} capital={data[0].capital[0]} language={data[0].languages} population={data[0].population} currency={data[0].currencies}/>
    //<Template flag={data[1].flags.svg} name={data[1].name.common} capital={data[1].capital[1]} language={data[1].languages} population={data[1].population} currency={data[1].currencies}/>
    
    //{Array.from(Array(32)).map((_, i) => <Template flag={data[i].flags.svg} name={data[i].name.common} capital={data[i].capital[0]} language={data[i].languages} population={data[i].population} currency={data[i].currencies} />)}
    //<Template flag={data[33].flags.svg} name={data[33].name.common} capital={data[33].capital[0]} language={data[33].languages} population={data[33].population} currency={data[33].currencies} />

    if(isLoading) {
      return(
        <div>
          <h1 className="loading-text" style={{textAlign:'center'}}>Loading</h1>
        </div>

      );

    }



    if(!isLoading){

      let countrylist = []

      try{  
      data.forEach((country, i)=> {
        try{
        countrylist.push(<Template flag={data[i].flags.svg} name={data[i].name.common} capital={data[i].capital[0]} language={data[i].languages} population={data[i].population} currency={data[i].currencies} />)
        console.log(i);
        console.log(country);
        }
        catch(error){
          console.log(error);
        }
      })}
      catch(error){
        console.log(error);
        countrylist = [] 
      }

      return (
        <div id="main" style={{width:'100%'}} >
        <header className='main_header'>
          <h1>World Countries Data</h1>
          <p>Currently, we have {data.length} countries</p>
        </header>
        <div class='input_div'>
          <input
          type='text'
          id='Search'
          name='Search'
          placeholder='Search By Country'
          value={searchTerm}
          onChange={handleChange}
        />
        </div>
        <div className='country_wrapper'>
          {countrylist}
       </div>
        
        </div>
      );
    }

    }


  export default Countries; 
  

  //fix south africa problem 
  //optimize code 
  //make it look nicer 
  //consider adding search by currency (but you already now how to do that using)
  //setData(...data, data)