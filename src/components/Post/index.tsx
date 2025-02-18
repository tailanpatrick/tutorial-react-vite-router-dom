import { useParams, useSearchParams } from "react-router-dom";

export const Post  = () => {
  const { id } = useParams();
  const [ qs ] = useSearchParams()
  
  return ( 
    <h1>Post {`Params: ${id}, QS: ${qs.get('page')}`}</h1>
   );
}
 
