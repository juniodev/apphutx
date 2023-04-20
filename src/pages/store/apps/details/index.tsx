import CardDownloadApp from '@/components/cards/CardDownloadApp'
import LayoutStore from '@/layouts/LayoutStore'
import styles from '@/styles/pages/AppDownload.module.css'
import axios from 'axios'
import { NextPageContext } from 'next'
import Image from 'next/image'

interface IAppDownload {
  title: string,
  icon: string,
  size: number,
  star: number,
  download: number,
  urlDownload: string,
  sobre: string,
  category: string,
  prints: Array<string>
}

export default function AppDownload (props: IAppDownload) {

  return (
    <LayoutStore title={props.title} description={props.sobre}>
      <div className={styles.page}>
        <CardDownloadApp
          title={props.title}
          icon={props.icon}
          size={props.size}
          star={props.star}
          download={props.download}
          urlDownload={props.urlDownload}
        />
        <ul className={styles.listPrints}>{
          props.prints.map((value, index) => {
            return (
              <li key={index} className={styles.cardImg}>
                <Image
                  src={value}
                  alt={`screenshot-${index}`}
                  height={350}
                  width={200}
                />
              </li>
            )
          })
        }
        </ul>
        <div>
          <h2>Sobre este app</h2>
          <span className={styles.sobre}>{props.sobre}</span>
        </div>
        <div className={styles.category}>
          <span>{props.category}</span>
        </div>
      </div>
    </LayoutStore>
  )
}

export async function getServerSideProps (ctx: NextPageContext) {

  const { package: pkg } = ctx.query

  // http://10.0.0.100/store/apps/details?package=com.softsapp.groupstelegram.softsapps

  if (!pkg) {
    return {
      redirect: {
        destination: '/notfound',
        permanent: false
      }
    }
  }

  try {
    const url = `https://store-39f28-default-rtdb.firebaseio.com/aplicativos/${pkg?.toString().replaceAll('.', '-')}/.json`

    const { data } = await axios.get(url)

    return {
      props: {
        title: data.title,
        icon: data.icon,
        prints: data.prints,
        urlDownload: data.urlDownload,
        size: data.size,
        star: data.star,
        download: data.download,
        category: data.category,
        sobre: data.sobre
      }
    }
  } catch {
    return {
      redirect: {
        destination: '/notfound',
        permanent: false
      }
    }
  }

}