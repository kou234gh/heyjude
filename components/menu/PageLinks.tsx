import Link from 'next/link'

export const PageLinks = () => {

  return (
    <ul>
      <li>
        <Link href="/navigation">
          <a>Go to pages/post/[pid].</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>Also goes to pages/post/[pid].js</a>
        </Link>
      </li>
      <li>
        <Link href="/post/abc/a-comment">
          <a>Go to pages/post/[pid]/[comment].js</a>
        </Link>
      </li>
    </ul>
  )

}