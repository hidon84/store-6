import React, { FC } from 'react';
import styled from 'styled-components';

const ProductRecommendContainerWrapper = styled.div`

`
interface Props {
    products: {
        idx: number,
        thumbnail: string,
    }[]
}

const ProductRecommendContainer: FC<Props> = ({ 
        products
    }) => { 

    
    return (
        <ProductRecommendContainerWrapper>
            {products.map((product) => { 
                <img src={product.thumbnail} alt="recommend"/>
            })}
        </ProductRecommendContainerWrapper>
    )
}

export default ProductRecommendContainer