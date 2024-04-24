import Link from 'next/link'

export const metadata = {
  title: "About ",
  description: `Here are some details about my self.`,
}

const page = () => {
  return (
    <div>
    <h2>About Us</h2>
    <p>Welcome to our blog! We are passionate about sharing valuable content with our readers.</p>
    <p>Our mission is to provide insightful articles on various topics including technology, lifestyle, travel, and more.</p>
    <p>Feel free to explore our blog and don't hesitate to reach out if you have any questions or feedback.</p>
  </div>
  )
}

export default page
