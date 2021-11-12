import { API_URL } from "../../data/api"

function Location({ name }) {
  return <div>{name}</div>
}

export default Location

export async function getServerSideProps({ params }) {
  const res = await fetch(`${API_URL}/location/${params.id}`)
  const character = await res.json()

  return { props: character }
}
