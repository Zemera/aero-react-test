import React from 'react'
import ArticleItem from './component'
import { Grid } from '@material-ui/core'
import { useSelector } from 'react-redux';
import { ApplicationState } from 'store/types';


export default function ArticleList() {
    const {products:{products}} = useSelector((state: ApplicationState) => state);

    return (
        <div>
            <Grid container >
                {
                    products.map((item: any, index: number) =>
                        <Grid item lg={4} md={6} xs={12} key={index}>
                            <ArticleItem  products={item}/>
                        </Grid>

                    )
                }
            </Grid>

        </div>
    )
}
