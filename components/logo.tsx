import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  logoStyle: string
}

const Logo = ({logoStyle}: LogoProps) => {
  return (
    <Link href="/">
        <Image 
          src={"/Gucci_Logo.svg"} 
          alt=""
          width={936.15} 
          height={150}
          className={logoStyle}
            
        />
    </Link>
  )
}

export default Logo