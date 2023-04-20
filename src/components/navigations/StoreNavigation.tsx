import styles from '@/styles/components/Navigation.module.css'
import { UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import Image from 'next/image'
import Link from 'next/link'

const Navigation = () => {

  return (
    <header className={styles.header}>
      <nav>
        <Link className={styles.logo} href="/">
          <Image
            className={styles.logoImg}
            src="/logo-header.svg"
            alt="logo-header"
            width={180}
            height={60}
            priority={true}
          />
        </Link>
        <Avatar
          className={styles.avatar}
          size={40}
          icon={<UserOutlined />}
        />
      </nav>
    </header>
  )
}

export default Navigation