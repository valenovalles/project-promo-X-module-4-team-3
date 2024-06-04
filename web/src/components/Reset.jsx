function Reset({setData, setUrl}) {
    const handleReset=(event)=>{
        event.preventDefault();
        setData({name:"", slogan:"", technologies:"", repo:"", demo:"", desc:"", autor:"", job:"", image:"", photo:""});

        setUrl(" ");
      
    }
  return (
    
        <button className='button--large' onClick={handleReset}>Reset</button>
    
   
  )
}

export default Reset