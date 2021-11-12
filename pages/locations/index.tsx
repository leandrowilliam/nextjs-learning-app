import { NextPage } from "next"
import { API_URL } from "../../data/api"

const Locations: NextPage<ILocations> = ({ locations }) => {
  return (
    <div>
      <ul>
        {locations.map((location) => (
          <li key={location.id}>
            <h4>{location.name}</h4>
          </li>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/location`)
  const locations = await res.json()

  return {
    props: {
      locations: locations.results,
    },
  }
}

type ILocations = {
  locations: Array<{
    id: string
    name: string
  }>
}

export default Locations
