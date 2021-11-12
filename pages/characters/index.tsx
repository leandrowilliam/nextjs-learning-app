import { NextPage } from "next"
import Link from "next/link"

import { API_URL } from "../../data/api"

const Characters: NextPage<ICharacters> = ({ characters }) => {
  return (
    <div>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <Link href="/characters/[id]" as={`/characters/${character.id}`}>
              <a>{character.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/character`)
  const characters = await res.json()

  return {
    props: {
      characters: characters.results,
    },
  }
}

type ICharacters = {
  characters: Array<{
    id: string
    name: string
  }>
}

export default Characters
