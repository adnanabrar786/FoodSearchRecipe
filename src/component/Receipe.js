import React ,{useState} from 'react'
import RecipeDetails from './RecipeDetails'

const Receipe = ({receipe}) => {

  const {label , image , url , ingredients} = receipe.recipe

  const [show, setShow] = useState(true);

  return (
    <div className='recipe'>

      <h2>{label}</h2>
      <img src={image} alt={label} />
      <a href={url} target="_blank" rel="noopener noreferrer">
         {url}
      </a>
        <button onClick={() => {setShow(!show)}}>Ingredients</button>

        {
          show &&       
            <RecipeDetails ingredients={ingredients} />
        }


    </div>
  )
}

export default Receipe
