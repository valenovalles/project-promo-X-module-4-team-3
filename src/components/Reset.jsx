function Reset({setData}) {
    const handleReset=(event)=>{
        event.preventDefault();
        setData({name:"", slogan:"", technologies:"", repo:"", demo:"", desc:"", autor:"", job:"", image:"", photo:""});
      
    }
  return (
    
        <button className='button--large' onClick={handleReset}>Reset</button>
    
   
  )
}

export default Reset