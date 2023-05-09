import { useState } from 'react'

const AddCategory = ({NewCategory}) => {
    
    const [inputValue, setInputValue] = useState('')

    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(inputValue.trim().length <= 1){
            return
        }
        NewCategory(inputValue.trim())
        //SE LIMPIE 
        setInputValue('')
    }
  return (
    <div>
        <form onSubmit={(e) => onSubmit(e)}>
            <input type="text" onChange={(e) => onInputChange(e)} value={inputValue} placeholder="Buscar gifs" />
            {/* <button>Add Category</button> */}
        </form>
    </div>
  )
}

export default AddCategory