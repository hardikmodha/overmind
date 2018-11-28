import { h, useRef, useEffect } from 'overmind-components'
import * as styles from './styles'
import { Component } from '../../app'
import { useIsMobile } from '../../utils'

type Props = {
  url: string
}

// https://www.youtube.com/watch?v=RA1_cCgEWws

const VideoPlayer: Component<Props> = () => {
  const ref = useRef()
  const isMobile = useIsMobile()

  useEffect(() => {
    requestAnimationFrame(() => (ref.target.style.opacity = '1'))
  })

  return (
    <div className={styles.wrapper} ref={ref}>
      <a className={styles.backdrop} href="/videos" />
      <div className={styles.video}>
        <div className={styles.loader}>loading video...</div>
        <iframe
          className={styles.iframe}
          width={isMobile ? '300' : '560'}
          height={isMobile ? '169' : '315'}
          src={
            this.props.url.replace('watch?v=', 'embed/') +
            '?rel=0&amp;showinfo=0'
          }
          frameBorder="0"
          // @ts-ignore
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    </div>
  )
}

export default VideoPlayer
