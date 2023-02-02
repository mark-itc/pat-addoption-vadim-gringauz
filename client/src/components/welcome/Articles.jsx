import React from 'react'
import { Stack, Typography, Paper } from '@mui/material'
import ArticlePreview from './ArticlePreview'
import articlesList from '../../config/articles'

function Articles() {
    return (
        <>
            {
                articlesList.length > 0 && (
                    <Paper elevation={20} sx={{ padding: '20px' }} >
                        <Stack>
                            <Typography variant='h3' component={'div'}>
                                Some Articles:
                            </Typography>
                            {articlesList.map((article) => (
                                <ArticlePreview key={article.id} summary={article.summary} />
                            ))}
                        </Stack>
                    </Paper>
                )
            }
        </>
    )
}

export default Articles