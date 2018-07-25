import React from "react"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload, faProjectDiagram, faUsers} from '@fortawesome/free-solid-svg-icons'

library.add(faUpload);
library.add(faProjectDiagram);
library.add(faUsers);

export default {
  numberOfPushes:<FontAwesomeIcon icon="upload"/>,
  numberOfInterns:<FontAwesomeIcon icon="users"/>,
  numberOfProjects:<FontAwesomeIcon icon="project-diagram"/>
}
