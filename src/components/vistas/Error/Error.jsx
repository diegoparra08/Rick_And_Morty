import errorImg from '../../../Images/errorImage.jpg'
import { ErrorContainer, ErrorImage } from './Error.style';
function ErrorPage() {
 
    return(
    
    <ErrorContainer>
        <ErrorImage src={errorImg} alt="Error" />
    </ErrorContainer>
    )
}

export default ErrorPage;