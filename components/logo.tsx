import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  logoStyle: string
}

const Logo = ({logoStyle}: LogoProps) => {
  return (
    <div>
      <Link href="/">
          <Image 
            src={"/Gucci_Logo.svg"} 
            alt=""
            width={936.15} 
            height={150}
            className={logoStyle}
              
          />
      </Link>
    </div>
  )
}

export default Logo