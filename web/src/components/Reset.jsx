function Reset({setData, setUrl}) {
    const handleReset=(event)=>{
        event.preventDefault();
        setData({NAME:"", date:"", contact:"", ubicacion:"", gift:"", message:"", coupleName:"", quote:"", otherImage:"", coupleImage:""});

        setUrl(" ");
      
    }
  return (
    
        <button className='button--large' onClick={handleReset}>Reset</button>
    
   
  )
}

export default Reset