import Link from 'next/link'


export default function Home() {
    return (
      <div className={styles.container}>
         <Link href="/">
            <a>Home</a>
         </Link>
      </div>
    )
  }