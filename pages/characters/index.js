import Link from "next/link"

import { API_URL } from "../../data/api"

function Characters({ characters }) {
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

export default Characters
