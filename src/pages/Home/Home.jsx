import Banner from "../../components/Banner/Banner"
import Gallery from "../../components/Gallery/Gallery"
// import styles from "./Home.module.scss"

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
