import React from 'react'
import FontIcon from '@fortawesome/react-fontawesome'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faYoutube from '@fortawesome/fontawesome-free-brands/faYoutube'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faTumblr from '@fortawesome/fontawesome-free-brands/faTumblr'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'

const SocialIcons = () => (
  <aside>
    <FontIcon icon={faFacebook} />
    <FontIcon icon={faYoutube} />
    <FontIcon icon={faTwitter} />
    <FontIcon icon={faInstagram} />
    <FontIcon icon={faTumblr} />
  </aside>
)

export default SocialIcons
