import { 
    faPenToSquare,
    faDeleteLeft,
    faUserXmark,
    faFilePen,
    faUserPen
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";



const Icons = () => {
    return library.add(
       faPenToSquare,
       faDeleteLeft,
       faUserXmark,
       faFilePen,
       faUserPen
    );
}

export default Icons;

  