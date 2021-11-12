import { NextPage } from "next"
import { API_URL } from "../../data/api"

const Location: NextPage<ILocation> = ({ name }) => {
  return <div>{name}</div>
}

type ILocation = {
  id: string
  name: string
}

export default Location

export async function getServerSideProps({ params }) {
  const res = await fetch(`${API_URL}/location/${params.id}`)
  const character = await res.json()

  return { props: character }
}
