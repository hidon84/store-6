import React, { useContext, useEffect ,useRef} from 'react';
import styled from 'styled-components';
import { checkCircleSVG, RefreshSVG, SmallCircleSVG } from '~/assets';
import { FilterContext } from '~/pages/ProductList';
import { setCategory } from '~/stores/productListModule';

const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 83px;
  height: 83px;

  img{
    place-self: center;
    width: 55px;
    cursor: pointer;
    transition: all 300ms;
    &:hover {
      transform: scale(1.08);
    }
  }
  &:selected{
    background: url(${SmallCircleSVG}) no-repeat center center;
  }
`

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
            // node.classList.add('selected')

            node.style.background = `url(${SmallCircleSVG}) no-repeat center center`
        } else {
            // node.classList.remove('selected')
            node.style.background = 'none'

        }
    })

    return (
        <Image onClick={handleImgClick} ref={ImagContainer}>
            <img src={image}/>
        </Image>
    )
}

export default CategoryItem