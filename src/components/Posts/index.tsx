import { Outlet, useParams, useSearchParams } from "react-router-dom";

export const Posts = () => {
  const { id } = useParams();
  const [qs] = useSearchParams()

  return <>
    <h1>Post {`Params: ${id}, QS: ${qs.get('page')}`}</h1>
    <Outlet />
  </>
}

