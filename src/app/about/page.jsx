import Link from 'next/link'

export const metadata = {
  title: "About ",
  description: `Here are some details about my self.`,
}

const page = () => {
  return (
    <div>

      <Link href='/'>Home</Link>
    </div>
  )
}

export default page
