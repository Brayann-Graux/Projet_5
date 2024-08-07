import Banner from "../../components/Banner/Banner"
import Gallery from "../../components/Gallery/Gallery"
import "./Home.scss"

function Home() {
  return (
    <main role="main">
      <Banner>
        <div>Chez vous, partout et ailleurs</div>
      </Banner>
      <Gallery />
    </main>
  )
}

export default Home
