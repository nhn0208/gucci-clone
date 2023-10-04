import Link from 'next/link'

interface ContactUsProps {
  isHidden: boolean
}

const ContactUs = ({ isHidden }: ContactUsProps) => {
  return (
    <Link href="/contact-us">
        <div className={`${isHidden ? "animate-fade-out":"animate-fade-in"} lg:block hidden`}>
            <span className='text-xs font-medium tracking-[-0.03em]'>Contact Us</span>
            <div className='border-b w-full border-black'></div>
        </div>
    </Link>
  )
}

export default ContactUs