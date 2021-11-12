import { NextPage } from "next"
import { API_URL } from "../../data/api"

const Character: NextPage<ICharacter> = ({ name }) => {
  return <div>{name}</div>
}

type ICharacter = {
  id: string
  name: string
}

export default Character

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/character`)
  const characters = await res.json()

  const paths = characters.results.map((character) => ({
    params: { id: `${character.id}` },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${API_URL}/character/${params.id}`)
  const character = await res.json()

  return { props: character }
}
