import React, { useContext, useEffect ,useRef} from 'react';
import { FilterContext } from '~/pages/ProductList';
import { setCategory } from '~/stores/productListModule';
import { ImageContainer } from './index.style'

interface Props {
    idx: number;
    image: string;
}

const CategoryItem: React.FC<Props> = ({ 
    idx,
    image
}) => {

    const { dispatch, ...currentState } = useContext(FilterContext);
    

    const handleImgClick = () => {
        dispatch(setCategory(idx));
    }
    
    const ImagContainer = useRef();

    useEffect(() => {
        const node = ImagContainer.current as any
        if (idx === currentState.state.category) {
            node.classList.add('selected')            
        } else {
            node.classList.remove('selected')
        }
    })

    return (
        <ImageContainer onClick={handleImgClick} ref={ImagContainer}>
            <img src={image}/>
        </ImageContainer>
    )
}

export default CategoryItem