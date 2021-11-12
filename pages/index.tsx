import { NextPage } from "next"
import Link from "next/link"

const HomePage: NextPage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/characters">
            <a>Characters</a>
          </Link>
        </li>
        <li>
          <Link href="/locations">
            <a>Locations</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default HomePage
