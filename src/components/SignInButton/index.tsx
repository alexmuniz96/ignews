import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss'

export function SignInButton() {
  const isUserLoggedIn = true
  return isUserLoggedIn ? (
    <button
      type='button'
      className={styles.signInButton}
    >
      <FaGithub color="#04d361" />
      Alex Muniz
      <FiX color="#737380" className={styles.closeIcon} />
      {console.log("está logado")}
    </button>
  ) : (
    <button
      type='button'
      className={styles.signInButton}
    >
      <FaGithub color="#eba417" />
      {console.log("está deslogado")}
      Sign in with Github
    </button>
  )
}


{/* <button
type='button'
className={styles.signInButton}
>
<FaGithub color="#04d361" />
Alex Muniz
<FiX color="#737380" className={styles.closeIcon} />
</button>
) : (
<button
type='button'
className={styles.signInButton}
>
<FaGithub color="#eba417" />
Sign in with Github
</button> */}