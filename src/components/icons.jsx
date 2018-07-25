import React from "react"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload, faProjectDiagram} from '@fortawesome/free-solid-svg-icons'

library.add(faUpload);
library.add(faProjectDiagram);

export default {
  numberOfPushes:<FontAwesomeIcon icon="upload"/>,
  numberOfProjects:<FontAwesomeIcon icon="project-diagram"/>
}
