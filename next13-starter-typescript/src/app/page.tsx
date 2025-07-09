import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import '@styles/app.css'
import TableComponent from '../components/common/table'

export default function Home() {
  return (
    <main className={styles.main}>
      <ul>
        <li className='red'><Link href={"/facebook"}>Facebook</Link></li>
        <li><Link href={"/youtube"}>YouTube</Link></li>
      </ul>
      <TableComponent />

    </main>
  )
}
