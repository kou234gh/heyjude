import type { NextPage } from 'next'
import Image from 'next/image'
import { HeadTag } from '../components/always/Head'
import styles from '../styles/Home.module.css'
// import { PageLinks } from '../components/menu/PageLinks'
import { HeaderTag } from '../components/always/Header'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>

      <HeadTag />

      <HeaderTag />


      <main className={styles.main}>
        {/* <div className='grid grid-cols-3'>
          <div>
            <h1>課題（過去）</h1>
            <form>
              <input></input>
            </form>
            
          </div>
          <div>
            <h1>実行手段（今）</h1>
            <form>
              <input></input>
            </form></div>
          <div>
            <h1>結果（未来）</h1>
            <form>
              <input></input>
            </form>
          </div>
        </div> */}
        <form action="/api/form" method="post">
          <label htmlFor="first">課題・過去</label>
          <input type="text" id="first" name="first" required />

          <label htmlFor="last">手段・今</label>
          <input type="text" id="last" name="last" required />
          
          <button type="submit">検索</button>
        </form>
      </main>
    </div>
  )
}

export default Home
