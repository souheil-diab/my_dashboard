
import { Container } from 'react-bootstrap'

import { useTranslation } from 'react-i18next';


function Home() {
  
  const { t } = useTranslation();

  return (
    <Container className='mt-2'>
      <h2>{t('welcome')}</h2>
      <p>{t('sub_welcome')}</p>
    </Container>
  )
}

export default Home
