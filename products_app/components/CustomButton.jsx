import "../styles/button.module.css";

function CustomButton({name = 'Default button' , bgColor = 'red', cr = 'white'}){
    return(
        <div> 
            <button 
            style={{
                color:cr,
                backgroundColor: bgColor,
                fontSize:'20px',
                borderRadius: '10px',
                padding:'2%'
            }}>{name}</button>
        </div>
    )
}

export default CustomButton